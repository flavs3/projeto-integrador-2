from django.db import models

# Create your models here.

class Pet(models.Model):
    nome = models.CharField(max_length=100)
    raca = models.CharField(max_length=100)
    idade = models.PositiveIntegerField()

    def __str__(self):
        return self.nome
