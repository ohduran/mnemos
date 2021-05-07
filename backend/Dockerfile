# Use an official Python runtime as a parent image
FROM python:latest

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /usr/src/app

# Install Python dependencies
COPY ./requirements /usr/src/app/requirements
RUN pip install -r requirements/development.txt

# copy entrypoint.sh
COPY ./entrypoint.sh .

# Add the rest of the code
COPY . .

# Make port 8000 available for the app
EXPOSE 8000

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]