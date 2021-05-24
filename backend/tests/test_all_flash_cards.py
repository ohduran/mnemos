import pytest
import json
import jwt
from faker import Faker
from graphene_django.utils.testing import graphql_query

from .factories import FlashCardFactory, DeckFactory, UserFactory


fake = Faker()


@pytest.mark.django_db
def test_empty_flashcards(mocker, django_assert_num_queries):
    username = f"google-oauth2.9392"

    user = UserFactory(username=username)
    deck = DeckFactory()

    token = jwt.encode({"some": "payload"}, key=fake.sentence())
    headers = {"HTTP_AUTHORIZATION": f"Bearer {token}"}

    decoded_token_mocker = mocker.patch('users.auth.jwt_decode_token')
    decoded_token_mocker.return_value = {
        'iss': fake.url(),
        'sub': username.replace('.', '|'),
        'aud': [
            fake.url(),
            fake.url(),
        ],
        'iat': fake.random_int(),
        'exp': fake.random_int(),
        'azp': 'fLEiAprcHhvXTvjCWoDryHfbbJNErZKksCPgsthv',
        'scope': 'openid profile email read:decks read:flashcards offline_access'
    }

    with django_assert_num_queries(3):
        response = graphql_query(
            f'''
            query{{
                allFlashCards{{
                    id,
                    prompt,
                    answer
                }}
            }}
            ''',
            headers=headers,
        )
    assert {'data': {'allFlashCards': []}} == json.loads(response.content)


@pytest.mark.django_db
def test_all_flashcards(mocker, django_assert_num_queries):
    username = f"google-oauth2.9392"

    print(username)

    user = UserFactory(username=username)
    deck = DeckFactory()

    token = jwt.encode({"some": "payload"}, key=fake.sentence())
    headers = {"HTTP_AUTHORIZATION": f"Bearer {token}"}

    decoded_token_mocker = mocker.patch('users.auth.jwt_decode_token')
    decoded_token_mocker.return_value = {
        'iss': fake.url(),
        'sub': username.replace('.', '|'),
        'aud': [
            fake.url(),
            fake.url(),
        ],
        'iat': fake.random_int(),
        'exp': fake.random_int(),
        'azp': 'fLEiAprcHhvXTvjCWoDryHfbbJNErZKksCPgsthv',
        'scope': 'openid profile email read:decks read:flashcards offline_access'
    }

    flashcards = FlashCardFactory.create_batch(5, deck=deck)

    with django_assert_num_queries(3):
        response = graphql_query(
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
            ''',
            headers=headers,
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
