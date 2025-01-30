from rest_framework import serializers
from .models import Language

class LanguageSerizalizer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'