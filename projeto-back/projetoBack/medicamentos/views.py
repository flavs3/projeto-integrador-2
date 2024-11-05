from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Medication, Assignment
from .serializers import MedicationSerializer, AssignmentSerializer

class MedicationViewSet(viewsets.ModelViewSet):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer

class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer