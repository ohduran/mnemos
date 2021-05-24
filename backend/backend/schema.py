import logging
import graphene
import graphql_jwt

from graphene_django import DjangoObjectType

from decks.models import Deck
from flashcards.models import FlashCard

logger = logging.getLogger(__name__)


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

    def resolve_all_decks(self, info):
        return Deck.objects.prefetch_related("flashcards").all()

    @graphql_jwt.decorators.login_required
    def resolve_all_flash_cards(self, info, deck_name):
        return FlashCard.objects.select_related("deck").filter(deck__name=deck_name)

    def resolve_random_flash_card(self, info, deck_name):
        return FlashCard.objects.select_related("deck").filter(deck__name=deck_name).order_by('?').first()


schema = graphene.Schema(query=Query)
