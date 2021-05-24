import json
import jwt
import requests
import os
import logging

from django.contrib.auth import authenticate


JWT_ISSUER = os.environ['JWT_ISSUER']
JWT_AUDIENCE = os.environ['JWT_AUDIENCE']
logger = logging.getLogger(__name__)


def jwt_get_username_from_payload_handler(payload, *args, **kwargs):
    username = payload.get('sub').replace('|', '.')
    authenticate(remote_user=username)
    return username


def jwt_decode_token(token, context):
    import ipdb
    ipdb.set_trace()
    header = jwt.get_unverified_header(token)
    jwks = requests.get(
        f'https://{JWT_ISSUER}/.well-known/jwks.json').json()
    public_key = None
    for jwk in jwks['keys']:
        if jwk['kid'] == header['kid']:
            public_key = jwt.algorithms.RSAAlgorithm.from_jwk(jwk)

    if public_key is None:
        raise Exception('Public key not found.')

    return jwt.decode(token, public_key, audience=JWT_AUDIENCE,
                      issuer=f'https://{JWT_ISSUER}/', algorithms=['RS256'])
