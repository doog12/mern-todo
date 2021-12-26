# MERN Todo App

[![linkedin](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/kirilldrannikov/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Technology Stack
> Frontend
- React
- Materialize CSS
- Bootstrap
- Google Fonts
- SCSS
- Axios
>Backend
- Node.js
- Express
- MongoDB
- Axios
- JWT
- Bcrypt

-----

## Getting Started

To get started you can simply clone the repo and install the dependencies in the root folder

| Steps   |with [NPM](https://www.npmjs.com/) |
| ------- | --------------------------------- | 
| Install |`npm install`                      |
| Run     |`npm run dev`                      |

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />
The server is running on port [5000](http://localhost:5000)

### .env example
```env
PORT=5000

DB_USERNAME=username
DB_PASS=password
DB_NAME=db_name

JWT_SECRET = 'agaeghseogh23h032u0efhwhegoehg09wu32'
```

----

## Project Structure
```bash
|-- Mern-Todo
    |-- client
    |   |-- package.json
    |   |-- public
    |   |   |-- index.html
    |   |   |-- robots.txt
    |   |-- src
    |   |   |-- Components
    |   |   |   |-- Navbar
    |   |   |   |   |-- Navbar.jsx
    |   |   |   |   |-- Navbar.scss
    |   |   |-- context
    |   |   |   |-- AuthContext.js
    |   |   |-- hooks
    |   |   |   |-- auth.hooks.js
    |   |   |-- Pages
    |   |   |   |-- AuthPage
    |   |   |   |   |-- AuthPage.jsx
    |   |   |   |   |-- AuthPage.scss
    |   |   |   |   |-- Login.jsx
    |   |   |   |   |-- Register.jsx
    |   |   |   |-- MainPage
    |   |   |   |   |-- MainPage.jsx
    |   |   |   |   |-- MainPage.scss
    |   |   |   |-- routes.js
    |   |   |-- scss
    |   |   |   |-- utils
    |   |   |   |   |-- _fonts.scss
    |   |   |   |   |-- _mixins.scss
    |   |   |   |   |-- _vars.scss
    |   |   |   |-- style.scss
    |   |   |-- App.js
    |   |   |-- index.js
    |   |   |-- reportWebVitals.js
    |-- models
    |   |-- Todo.js
    |   |-- User.js
    |-- routes
        |-- auth.route.js
        |-- todo.route.js
    |-- .env
    |-- index.js
    |-- package.json
```
