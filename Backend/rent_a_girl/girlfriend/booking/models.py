from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

SERVICE_CHOICES = (
    ("Dinner Date", "Dinner Date"),
    ("Movie Date", "Movie Date"),
    ("Lunch Date", "Lunch Date"),
    ("Picnic Date", "Picnic Date"),
    )
TIME_CHOICES = (
    ("3 PM", "3 PM"),
    ("3:30 PM", "3:30 PM"),
    ("4 PM", "4 PM"),
    ("4:30 PM", "4:30 PM"),
    ("5 PM", "5 PM"),
    ("5:30 PM", "5:30 PM"),
    ("6 PM", "6 PM"),
    ("6:30 PM", "6:30 PM"),
    ("7 PM", "7 PM"),
    ("7:30 PM", "7:30 PM"),
    ("8 PM", "8:30 PM"),
    ("9 PM", "9:30 PM"),
    ("10 PM", "10:30 PM")
)

class Rent_her(models.Model):
    """
    Renting a girlfriend
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    service = models.CharField(max_length=50, choices=SERVICE_CHOICES, default="Lunch Date")
    day = models.DateField(default=datetime.now)
    time = models.CharField(max_length=10, choices=TIME_CHOICES, default="3 PM")
    time_ordered = models.DateTimeField(default=datetime.now, blank=True)
    duration = models.IntegerField(default=1)


    def __str__(self):
        """
        Shows the date and time
        """
        return f"the girl is {self.user.username} | day: {self.day} | time: {self.time} | duration {self.duration}"