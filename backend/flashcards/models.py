from django.db import models


class FlashCard(models.Model):
    prompt = models.TextField()
    answer = models.TextField()

    # Protect deletion to make sure that all flashcards get deleted before the actual deck.
    deck = models.ForeignKey(
        "decks.Deck", on_delete=models.PROTECT, related_name="flashcards")

    def __str__(self):
        if len(self.prompt) > 16:
            return f"{self.id}: {self.prompt[0:8]}...{self.prompt[-8:]}"
        return f"{self.id}: {self.prompt}"
