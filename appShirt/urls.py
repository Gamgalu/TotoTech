from django.urls import path

from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('preview/', views.preview, name='preview'),
    path('newpreview/', views.newpreview, name='newpreview'),
    path('', views.landingpage, name='landingpage'),
    path('matchbox/', views.matchbox, name='matchbox'),
    path('speechapi/', views.speechapi, name='speechapi'),
]
