from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from django.db import models


class RegisterUserForm(UserCreationForm):
    """
    Creates a user in the database
    """
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'class':'form-control form-control-lg', 'placeholder': 'example@gmail.com'}))
    first_name = forms.CharField(label='First Name', max_length=50, widget=forms.TextInput(attrs={'class':'form-control form-control-lg'}))
    last_name = forms.CharField(label='Last Name', max_length=50, widget=forms.TextInput(attrs={'class':'form-control form-control-lg'}))

    class Meta:
        """
        gets the user
        """
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2')

    def __init__(self, *args, **kwargs):
            """
            Fields when a user logs in the app
            """
            super(RegisterUserForm, self).__init__(*args, **kwargs)
            self.fields['username'].widget.attrs['class'] = 'form-control form-control-lg'
            self.fields['password1'].widget.attrs['class'] = 'form-control form-control-lg'
            self.fields['password2'].widget.attrs['class'] = 'form-control form-control-lg'




