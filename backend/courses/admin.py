from django.contrib import admin
from .models import Course, Module, Tag
# Register your models here.

admin.site.register(Course)
admin.site.register(Module)
admin.site.register(Tag)