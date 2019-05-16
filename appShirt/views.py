from django.shortcuts import render

def index(request):
    return render(request, 'appShirt/index.html')

def posenet(request):
    return render(request, 'appShirt/posenet.html')

def landingpage(request):
    return render(request, 'appShirt/landingpage.html')

def speechapi(request):
    return render(request, 'appShirt/speechapi.html')

def matchbox(request):
    return render(request, 'appShirt/matchbox.html')
