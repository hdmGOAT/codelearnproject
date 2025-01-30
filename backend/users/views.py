from django.shortcuts import render
from rest_framework.viewsets import APIView, ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

# Create your views here.

class UserViewSet (ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def create(self , request):
        return Response({"error": "User creation is disabled"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


