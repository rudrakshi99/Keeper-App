from notes.models import Note
from rest_framework import serializers

class NoteSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    class Meta:
        model = Note
        fields = ('id', 'title', 'text', 'created_at', 'updated_at',  'user', 'username')
        read_only_fields = ['username', 'user']
        
    
    def get_username(self, obj):
        return obj.user.username
        