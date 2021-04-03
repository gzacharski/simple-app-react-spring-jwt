![GitHub last commit](https://img.shields.io/github/last-commit/gzacharski/simple-app-react-spring-jwt)
![GitHub contributors](https://img.shields.io/github/contributors/gzacharski/simple-app-react-spring-jwt)

# Description
Simple app implementing public page, private page, login and registration form. Authentication with JSON Web Token.

## Front-end
React app bootstrapped with create-react-app.
* Language: Typescript
* CSS: Bootstrap 4.6.0
* Tests: Jest

## Back-end
Microservices written in Spring Boot.
* api gateway
* discovery service
* user service (includes H2 database)

# How to start?
1. You will need [Docker](https://www.docker.com/).
1. Clone the project.
1. In root folder of the project type in terminal:
    ```shell script
    docker-compose up --build -d
    ```
1. Startup may last up to a few minutes.
1. Eventually there will be available pages:
    * http://localhost:3000 - front-end app
    * http://localhost:8010 - discovery service dashboard
    * http://localhost:{randomPort}/h2-db-console - dashboard H2 in-memory database (Login: admin, Password: admin). \
    Port of user service is assigned randomly. Check out its port in discovery service dashboard. 

# How to stop?
1. In root folder of the project type in terminal:
    ```shell script
    docker-compose down
    ```