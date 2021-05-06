import graphene
from graphene_django import DjangoObjectType

from flashcards.models import FlashCard


class FlashCardType(DjangoObjectType):
    class Meta:
        model = FlashCard
        fields = ("id", "prompt", "answer")


class Query(graphene.ObjectType):
    all_flash_cards = graphene.List(FlashCardType)

    def resolve_all_flash_cards(self, context):
        # We can easily optimize query count in the resolve
        # method if needed with select_related
        return FlashCard.objects.all()


schema = graphene.Schema(query=Query)
