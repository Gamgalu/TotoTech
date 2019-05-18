from django.shortcuts import render

def index(request):
    return render(request, 'appShirt/index.html')

def preview(request):
    return render(request, 'appShirt/preview.html')

def newpreview(request):
    return render(request, 'appShirt/newpreview.html')

def landingpage(request):
    return render(request, 'appShirt/landingpage.html')

def speechapi(request):
    return render(request, 'appShirt/speechapi.html')

def matchbox(request):
    return render(request, 'appShirt/matchbox.html')
