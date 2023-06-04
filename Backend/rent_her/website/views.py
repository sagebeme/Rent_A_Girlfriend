from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse

def welcome(request):
    """
    Purpose: Welcome request
    """
    return HttpResponse('Welcome to Rent a girlfriend')


def date(request):
    """
    Purpose: show time page was opened
    """
    return HttpResponse('This page was opened at '+ str(datetime.now()))


def about(request):
    """
    Purpose: shows about page
    """
    return HttpResponse("This is the about page")
# end def

