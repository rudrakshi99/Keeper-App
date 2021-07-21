# NotesApp
A simple notes app built using Django rest framework having CRUD operations along with filters and token authentication.

## Technology Stack to be used:

<img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/> <img src="https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/>  <img src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/postgres-0B96B2?style=for-the-badge&logo=postgresql&logoColor=white"/> <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>

[![View in Swagger](http://jessemillar.github.io/view-in-swagger-button/button.svg)](https://notes-app-rudrakshi.herokuapp.com/swagger/) 
[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/14143990/Tzm9iDyq)


- **Backend**: Django Rest Framework
- **IDE**: VS Code
- **API Testing & Documentation:** Swagger, Postman
- **Version Control**: Git and GitHub
- **Database**: PostgreSQL
- **Hosting**: Heroku


### Backend Setup Instructions

- Fork and Clone the repo using
```
$ git clone https://github.com/rudrakshi99/NotesApp.git
```
- Setup Virtual environment
```
$ python3 -m venv env
```
- Activate the virtual environment
```
$ source env/bin/activate
```
- Install dependencies using
```
$ pip3 install -r requirements.txt
```
- Make migrations using
```
$ python3 manage.py makemigrations
```
- Migrate Database
```
$ python3 manage.py migrate
```
- Create a superuser
```
$ python3 manage.py createsuperuser
```
- Run server using
```
$ python3 manage.py runserver
``` 
