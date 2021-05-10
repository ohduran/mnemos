#!/bin/bash
if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! netcat -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

python manage.py flush --no-input
python manage.py migrate
python manage.py loaddata 2000_deck_capitales

exec "$@"