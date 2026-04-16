from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Url

def home(request):
    return HttpResponse("Hello, world. you're at the home page.")

def redirect(request):
    urls = list(Url.objects.values('long_url', 'shortened_url'))

    context = {
        'urls' : urls
    }
    
    return render(request, 'index.html', context)
