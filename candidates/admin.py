from django.contrib import admin
from .models import Candidate


class CandidateAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'document',
                    'phone', 'application_date', 'address')
    search_fields = ['name', 'email', 'address']
    list_per_page = 50
    list_filter = ['application_date']


admin.site.register(Candidate, CandidateAdmin)
