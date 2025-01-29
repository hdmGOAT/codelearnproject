from django.db import models
from content.models import Content

# Create your models here.

class Question(models.Model):
    content = models.ForeignKey(Content, on_delete=models.CASCADE, related_name="questions")
    question_text = models.TextField()
    difficulty = models.CharField(max_length=50, choices=[("easy", "Easy"), ("medium", "Medium"), ("hard", "Hard")], default="easy")

    def __str__(self):
        return self.question_text

class Option(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name="options")
    text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)  # Stores whether the option is correct

    def __str__(self):
        return self.text