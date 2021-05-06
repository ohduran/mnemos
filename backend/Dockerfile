# Use an official Python runtime as a parent image
FROM python:latest

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /app/

# Install Python dependencies
COPY ./requirements /app/requirements
RUN pip install -r requirements/development.txt

# Add the rest of the code
COPY . /app/

# Make port 8000 available for the app
EXPOSE 8000