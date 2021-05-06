import pytest
import json


@pytest.mark.django_db
def test_empty_flashcards(client_query):
    response = client_query(
        '''
        query{
            allFlashCards{
                id,
                prompt,
                answer
            }
        }
        '''
    )
    assert {'data': {'allFlashCards': []}} == json.loads(response.content)
