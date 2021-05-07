import graphene
from graphene_django import DjangoObjectType

from decks.models import Deck
from flashcards.models import FlashCard


class DeckType(DjangoObjectType):
    class Meta:
        model = Deck
        fields = ("id", "name", "flashcards")


class FlashCardType(DjangoObjectType):
    class Meta:
        model = FlashCard
        fields = ("id", "prompt", "answer", "deck")


class Query(graphene.ObjectType):
    all_decks = graphene.List(DeckType)
    all_flash_cards = graphene.List(
        FlashCardType, deck_name=graphene.String(required=True))
    random_flash_card = graphene.Field(
        FlashCardType, deck_name=graphene.String(required=True))

    def resolve_all_decks(self, context):
        return Deck.objects.prefetch_related("flashcards").all()

    def resolve_all_flash_cards(self, context, deck_name):
        return FlashCard.objects.select_related("deck").filter(deck__name=deck_name)

    def resolve_random_flash_card(self, context, deck_name):
        return FlashCard.objects.select_related("deck").filter(deck__name=deck_name).order_by('?').first()


schema = graphene.Schema(query=Query)
