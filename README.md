---
noteId: "a7ae8fb0da5211eabcc5fb5636741ef8"
tags: []
---

# Django Rest API with Reacjs

This project integrates django rest api for the backend and ReactJs for the frontend. The focus of this application is to show you how to consume a Django API quickly from a React app.

## Prerequisites

- Python3
- NodeJS(in a version 6 or plus) and npm (5.2+)
- Docker
- Docker-compose

## Getting Started

Steps to build, and run project:

1. `cd` to root of project
2. `docker-compose build`
3. `docker-compose up`
4. `docker-compose exec web python manage.py makemigrations`
5. `docker-compose exec web python manage.py migrate`
6. `docker-compose exec web python manage.py createsuperuser`

Now every time we make a request over http://localhost:8000/api/candidates with GET and POST HTTP verbs, we’ll execute this method.

To test signup on browser, go to:

## Examples of usage

`http://localhost:8000/accounts/signup/`
for signup:

## Links

Check out official documentation to this project:
https://django-allauth.readthedocs.io/en/latest/installation.html
