from rest_framework import serializers
from .models import Medicacao, Assignment

class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicacao
        fields = ['id', 'nome', 'concentracao', 'validade']

class AssignmentSerializer(serializers.ModelSerializer):
    pet = serializers.StringRelatedField()
    medication = serializers.StringRelatedField()

    class Meta:
        model = Assignment
        fields = ['id', 'pet', 'medicacao', 'horario', 'data', 'frequencia', 'ministrado']