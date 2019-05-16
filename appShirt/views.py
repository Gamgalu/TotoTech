from django.shortcuts import render

def index(request):
    return render(request, 'appShirt/index.html')

def posenet(request):
    return render(request, 'appShirt/posenet.html')

<<<<<<< HEAD
def landingpage(request):
    return render(request, 'appShirt/landingpage.html')

=======
def speechapi(request):
    return render(request, 'appShirt/speechapi.html')
>>>>>>> b4117a0a13730699641a4b2b70ed25cd0005a8c2
