from django.db import models

# Create your models here.
class Content(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    content_type = models.CharField(max_length=50, choices=[("quiz", "Quiz"), ("course", "Course")])

    def __str__(self):
        return self.title