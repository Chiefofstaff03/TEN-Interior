from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from contact.models import Contact  # Import the Contact model
from django.conf import settings

@api_view(['POST'])
def contact_form(request):
    data = request.data
    full_name = data.get("firstName")  # Changed from "fullName" to "firstName"
    email = data.get("email")
    phone = data.get("phone", "Not provided")
    message = data.get("message")

    # Validate required fields
    if not full_name or not email or not message:
        return Response({"error": "All required fields must be filled"}, status=400)

    # Save to Database
    contact_entry = Contact.objects.create(
        name=full_name,
        email=email,
        message=message,
        mobile_number=phone,
    )

    # Send Email Notification
    try:
        send_mail(
            subject=f"New Contact Form Submission from {full_name}",
            message=f"Name: {full_name}\nEmail: {email}\nPhone: {phone}\n\nMessage:\n{message}",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=["tech@entrepreneurshipnetwork.net"],
            fail_silently=False,
        )
    except Exception as e:
        return Response({"error": f"Failed to send email: {str(e)}"}, status=500)

    return Response({"success": "Message stored and email sent successfully!"}, status=200)
