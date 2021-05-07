import pytest
import json

from flashcards.models import FlashCard

from .factories import FlashCardFactory, DeckFactory


@pytest.mark.django_db
def test_empty_random_flash_cards(client_query, django_assert_num_queries):
    deck = DeckFactory()
    FlashCardFactory.create_batch(5, deck=deck)
    with django_assert_num_queries(1):
        response = client_query(
            f'''
            query{{
                randomFlashCard{{
                    id,
                    prompt,
                    answer
                }}
            }}
            '''
        )
    assert {'data': {'randomFlashCard': None}} == json.loads(response.content)


@pytest.mark.django_db
def test_random_flash_cards(client_query, django_assert_num_queries):
    deck = DeckFactory()
    other_deck = DeckFactory()
    flash_cards = FlashCardFactory.create_batch(5, deck=deck)
    other_flash_cards = FlashCardFactory.create_batch(5, deck=other_deck)
    with django_assert_num_queries(1):
        response_1 = client_query(
            f'''
            query{{
                randomFlashCard(deckName: "{deck.name}"){{
                    id,
                    prompt,
                    answer,
                    deck{{
                        id,
                        name
                    }}
                }}
            }}
            '''
        )
    random_flash_card_1_data = json.loads(response_1.content)[
        'data']['randomFlashCard']

    flash_card_1 = FlashCard.objects.get(id=random_flash_card_1_data['id'])
    assert (flash_card_1.prompt, flash_card_1.answer, str(flash_card_1.deck_id)) == (
        random_flash_card_1_data['prompt'], random_flash_card_1_data['answer'], random_flash_card_1_data['deck']['id'])

    response_2 = client_query(
        f'''
            query{{
                randomFlashCard(deckName: "{deck.name}"){{
                    id,
                    prompt,
                    answer,
                    deck{{
                        id,
                        name
                    }}
                }}
            }}
            '''
    )

    random_flash_card_2_data = json.loads(response_1.content)[
        'data']['randomFlashCard']

    if random_flash_card_1_data['id'] != random_flash_card_2_data['id']:
        flash_card_2 = FlashCard.objects.get(id=random_flash_card_2_data['id'])
        assert (flash_card_2.prompt, flash_card_2.answer, str(flash_card_2.deck_id)) == (
            random_flash_card_2_data['prompt'], random_flash_card_2_data['answer'], random_flash_card_2_data['deck']['id'])

    assert set([random_flash_card_1_data['id'], random_flash_card_2_data['id']]).issubset(
        set([str(flash_card.id) for flash_card in flash_cards]))
