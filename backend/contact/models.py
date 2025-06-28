from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15, null=True, blank=True)  # Set a default
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

def __str__(self):
        return self.name