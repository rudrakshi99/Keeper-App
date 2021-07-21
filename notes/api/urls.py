from django.urls import path, include
from .views import NoteListAPIView, NoteDetailAPIView, NoteCreateAPIView
app_name='notes'

urlpatterns = [
    
    path('', NoteListAPIView.as_view(), name='note-list'),
    path('create/', NoteCreateAPIView.as_view(), name='note-create'),
    path('<int:id>/', NoteDetailAPIView.as_view(), name='note-detail'),
]
