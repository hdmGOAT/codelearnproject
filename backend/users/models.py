from django.db import models
from courses.models import Course
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        if not username:
            raise ValueError("The Username field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, username, password, **extra_fields)
    
    
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True, default="default")
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    display_name = models.CharField(max_length=255, null=True, blank=True)
    profile_picture = models.ImageField(upload_to="profile_pictures/", null=True, blank=True)
    profile_banner = models.ImageField(upload_to="profile_banners/", null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    organization = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    courses_enrolled = models.ManyToManyField(Course, related_name="students", blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # Required for admin panel access

    objects = CustomUserManager()  # Custom user manager

    USERNAME_FIELD = "email"  # Use email for authentication
    REQUIRED_FIELDS = ["username","display_name"]  # Fields required during registration

    def __str__(self):
        return self.email