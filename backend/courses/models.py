from django.db import models

# Create your models here.

class Language(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.FloatField()
    completed_by = models.IntegerField()
    languages = models.ManyToManyField(Language, related_name="courses")
    thumbnail = models.ImageField(upload_to="thumbnails/")

    def __str__(self):
        return self.name
    
    
class Module(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name
