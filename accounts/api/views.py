from rest_framework import generics, permissions,status
from rest_framework.response import Response
from .serializers import UserSerializer, RegisterSerializer
from accounts.models import User
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, LogoutSerializer
from rest_framework.permissions import IsAuthenticated

class RegisterView(generics.GenericAPIView):

    serializer_class = RegisterSerializer

    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        return Response(user_data, status=status.HTTP_201_CREATED)




class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class OwnerListView(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        """Returns only the object related to current user"""
        user = self.request.user
        return User.objects.filter(email=user)


class OwnerUpdateRetriveDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset            = User.objects.all()
    serializer_class    = UserSerializer

    permission_classes  = (IsAuthenticated,)

    

class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    permission_classes = [permissions.IsAuthenticated,]

    def post(self, request):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        # serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)
