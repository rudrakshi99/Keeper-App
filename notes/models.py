from django.db import models
from accounts.models import User

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        
    
    def __str__(self):
        return '%s %s' % (self.title, self.text)