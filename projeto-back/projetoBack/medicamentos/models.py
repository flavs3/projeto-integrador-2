from django.db import models

# Create your models here.
from pets.models import Pet

class Medicacao(models.Model):
    nome = models.CharField(max_length=100)
    concentracao = models.CharField(max_length=50)
    validade = models.DateField()

    def __str__(self):
        return self.nome

class Assignment(models.Model):
    FREQUENCY_CHOICES = [
        ('daily', 'Diário'),
        ('monthly', 'Mensal'),
        ('once', 'Dose Única'),
    ]

    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    medicacao = models.ForeignKey(Medicacao, on_delete=models.CASCADE)
    horario = models.TimeField()
    data = models.DateField()
    frequencia = models.CharField(max_length=10, choices=FREQUENCY_CHOICES)
    ministrado = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.pet.nome} - {self.medicacao.nome}"
