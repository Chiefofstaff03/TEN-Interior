from django.contrib import admin
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message','mobile_number', 'created_at')  # Ensure these fields exist
    

admin.site.register(Contact, ContactAdmin)
