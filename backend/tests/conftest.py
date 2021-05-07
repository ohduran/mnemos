import pytest
from graphene_django.utils.testing import graphql_query


@pytest.fixture
def client_query(client):
    """See https://docs.graphene-python.org/projects/django/en/latest/testing/#using-pytest"""
    def wrapper(*args, **kwargs):
        return graphql_query(*args, **kwargs, client=client)
    return wrapper
