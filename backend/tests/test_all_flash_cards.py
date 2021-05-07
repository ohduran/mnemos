import pytest
import json

from .factories import FlashCardFactory, DeckFactory


@pytest.mark.django_db
def test_empty_flashcards(client_query, django_assert_num_queries):
    deck = DeckFactory()
    FlashCardFactory.create_batch(5, deck=deck)
    with django_assert_num_queries(1):
        response = client_query(
            f'''
            query{{
                allFlashCards{{
                    id,
                    prompt,
                    answer
                }}
            }}
            '''
        )
    assert {'data': {'allFlashCards': []}} == json.loads(response.content)


@pytest.mark.django_db
def test_all_flashcards(client_query, django_assert_num_queries):
    deck = DeckFactory()
    flashcards = FlashCardFactory.create_batch(5, deck=deck)
    with django_assert_num_queries(1):
        response = client_query(
            f'''
            query{{
                allFlashCards(deckName: "{deck.name}"){{
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
    expected_response = {
        'data': {
            'allFlashCards': [
                {
                    'id': str(flashcard.id),
                    'prompt': flashcard.prompt,
                    'answer': flashcard.answer,
                    'deck': {
                        'id': str(deck.id),
                        'name': deck.name
                    }
                }
                for flashcard in flashcards
            ]
        }
    }
    assert expected_response == json.loads(response.content)
