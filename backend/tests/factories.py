import factory
from faker import Faker

from decks.models import Deck
from flashcards.models import FlashCard

fake = Faker()


class DeckFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Deck

    name = factory.LazyAttribute(lambda _: fake.color_name())


class FlashCardFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = FlashCard

    prompt = factory.LazyAttribute(lambda _: fake.sentence())
    answer = factory.LazyAttribute(lambda _: fake.sentence())
