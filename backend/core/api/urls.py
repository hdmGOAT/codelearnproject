from django .urls import path, include

urlpatterns = [
    path('', include('courses.urls')),
    path('', include('users.urls')),
]
