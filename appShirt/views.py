from django.shortcuts import render

def index(request):
    return render(request, 'appShirt/index.html')

def posenet(request):
    return render(request, 'appShirt/posenet.html')

