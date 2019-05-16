from django.urls import path

from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('posenet/', views.posenet, name='posenet'),
    path('landingpage/', views.landingpage, name='landingpage'),
    path('speechapi/', views.speechapi, name='speechapi'),
]
