from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    display_name = serializers.CharField(required=True) 
    first_name = serializers.CharField(required=False, allow_blank=True)  
    last_name = serializers.CharField(required=False, allow_blank=True)  
    
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'display_name', 'password', 'profile_picture', 'bio', 'organization']
        
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            display_name=validated_data['display_name'], 
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),  
        )
        user.set_password(validated_data['password'])  
        user.save()
        return user