from django.shortcuts import render
from rest_framework import viewsets
from .models import Course, Module
from .serializers import CourseSerializer, ModuleSerializer

# Create your views here.
class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    
class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer