from rest_framework import serializers, status
from rest_framework.response import Response
from .serializers import NoteSerializer
from django.shortcuts import render
from notes.models import Note
from django.http import HttpResponse
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import  IsAuthenticated
from accounts.api.permissions import UserPermission
from .filters import NoteFilter
from django.db.models import Q

class NoteListAPIView(ListAPIView):
    # queryset = Note.objects.all()
    serializer_class = NoteSerializer
    filterset_fields     = ('id','title', 'created_at', 'updated_at','date_gt', 'date_lt',)
    filter_class = NoteFilter
    
    def get_queryset(self, *args, **kwargs):
        queryset_list = Note.objects.all()
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(title__icontains=query)|
                Q(user__username__icontains=query)|
                Q(created_at__icontains=query)|
                Q(updated_at__icontains=query))
        return queryset_list         
                

class NoteCreateAPIView(CreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    permission_classes = [IsAuthenticated]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data) 
                  
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            print('bbb')
            return Response(serializer.data, status=status.HTTP_201_CREATED)   # successfully CREATED
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # invalid data
    


class NoteDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    
    permission_classes = [IsAuthenticated, UserPermission]
    
    lookup_field        = 'id'                                      # set the lookup field to id

    def retrieve(self, request, id=None):
        try:                                                        # try to get the note
            note = Note.objects.get(id=id)
        except Note.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)   # if not found, return 404
        
        serializer = NoteSerializer(note)                     # serialize the note
        return Response(serializer.data)                            # return the serialized note
    
    
    def put(self, request, id=None):
        try:                                                        # try to get the note
            note = Note.objects.get(id=id)
        except Note.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)
        
        serializer = NoteSerializer(note, data=request.data)  # convert complex data by passing into serializer 
        
        if serializer.is_valid():                                   # check for validation of data
            serializer.save()
            return Response(serializer.data)                        # return updated the JSON response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # return error for invalid data


    def delete(self, request, id=None):
        try:
            note = Note.objects.get(id=id)
        except Note.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)  # return 404 if not found
        
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)         # return 204 if deleted