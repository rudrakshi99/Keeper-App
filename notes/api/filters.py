import django_filters as filters
from notes.models import Note

class NoteFilter(filters.FilterSet):
    date_gt = filters.DateFilter(field_name='date', lookup_expr='gt')
    date_lt = filters.DateFilter(field_name='date', lookup_expr='lt')
    
    class Meta:
        model = Note
        fields = ['id','date_gt', 'date_lt','title', 'created_at', 'updated_at',]

