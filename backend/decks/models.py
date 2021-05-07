from django.db import models


class Deck(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.id}: {self.name}"
