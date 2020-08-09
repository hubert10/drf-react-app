from django.db import models
from django.core.validators import MinLengthValidator


class Candidate(models.Model):
    name = models.CharField("Name", max_length=50,)
    email = models.EmailField()
    description = models.CharField("Description", max_length=500, validators=[
                                   MinLengthValidator(300)])
    document = models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    application_date = models.DateField("Application Date", auto_now_add=True)
    address = models.CharField("Address", max_length=20, null=True, blank=True)

    def __str__(self):
        return self.name
