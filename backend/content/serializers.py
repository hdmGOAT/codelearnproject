from rest_framework import serializers
from .models import Content

class ContentSerializer(serializers.Serializer):
    CONTENT_CHOICES = ["Quiz", "Lesson", "Activity"]
    
    content_type = serializers.ChoiceField(choices=CONTENT_CHOICES)
    
    class Meta:
        model = Content
        fields = '__all__'