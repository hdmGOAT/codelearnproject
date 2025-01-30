from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_nested.routers import NestedDefaultRouter
from .views import CourseViewSet, ModuleViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)


modules_router = NestedDefaultRouter(router, r'courses', lookup='course')
modules_router.register(r'modules', ModuleViewSet, basename='course-modules')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(modules_router.urls)),
]
