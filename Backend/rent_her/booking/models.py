from django.db import models

class Booking(models.Model):
    title = models.CharField(max_length=255)
    booking_date = models.DateField
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    
    
    def __str__(self):
        """
        Purpose: format the meeing time
        """
        return f"{self.title} on Date {self.booking_date} at {self.start_time} to end at {self.end_time}"
    
    
class User(models.Model):
    userName = models.CharField(max_length=50)
    email = models.EmailField()
    DOB = models.DateField()
    rating = models.IntegerField()  # Assuming rating is an integer field

    # Define the index on the rating field
    class Meta:
        indexes = [
            models.Index(fields=['rating']),
        ]

    def __str__(self):
        """
        Purpose: format the user model
        """
        return f"{self.userName} email is {self.email} year born {self.DOB} rated {self.rating}"

        
