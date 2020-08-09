from rest_framework import serializers
from .models import Candidate


class candidateserializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ('id', 'name', 'email', 'document',
                  'phone', 'application_date', 'address')
