from django.shortcuts import render

def index(request):
    return render(request, 'appShirt/index.html')

def preview(request):
    return render(request, 'appShirt/preview.html')

