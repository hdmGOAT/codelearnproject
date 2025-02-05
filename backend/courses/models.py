from django.db import models
from django.contrib.auth import get_user_model
from languages.models import Language

# Create your models here.

User = get_user_model()

class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.FloatField()
    instructor = models.ForeignKey(User, on_delete=models.CASCADE, related_name="courses")
    completed_by = models.IntegerField()
    languages = models.ManyToManyField(Language, related_name="courses")
    thumbnail = models.ImageField(upload_to="thumbnails/")
    
    tags = models.ManyToManyField("Tag", related_name="courses")
    
    
    def __str__(self):
        return self.title
    
class Module(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title
    
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    
    def __str__(self):
        return self.name

