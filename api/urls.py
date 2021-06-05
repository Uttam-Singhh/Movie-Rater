from api.views import MovieViewSet
from django import urls
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import MovieViewSet, RatingViewSet, UserViewSet

router=routers.DefaultRouter()
router.register('movie',MovieViewSet)
router.register('ratings',RatingViewSet)
router.register('users', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
