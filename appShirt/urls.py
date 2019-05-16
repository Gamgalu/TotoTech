from django.urls import path

from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('preview/', views.preview, name='preview'),
    path('', views.landingpage, name='landingpage'),
    path('speechapi/', views.speechapi, name='speechapi'),
]
