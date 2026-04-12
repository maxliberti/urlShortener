from django.shortcuts import render, redirect
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, world. you're at the home page.")

def redirect(request):
    target_url = 'https://www.google.com/'
    return render(request, 'index.html', {'target_url': target_url})
