# Dockerfile
# https://medium.com/@parth_24073/configure-docker-with-django-postgresql-pg-admin-elasticsearch-b8711420cdf5

# Pull base image
FROM python:3.7

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update&&apt-get upgrade -y

# Set work directory
RUN mkdir /code/
WORKDIR /code/

# install dependencies
COPY requirements.txt /code
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy project
COPY . /code/

