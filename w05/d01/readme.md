# To Do List App

Last week we built the backend to a to do list application. Today we are going to use those API endpoints to build a SPA front end. If you need the backend code from last week, it can be found [here](https://github.com/ga-students/wdi-atx-8/tree/master/w04/d03/afternoon/instructor/todo-list-api).
> Make sure to `npm install` and connect mongoose with an environment variable in `.env` file.

## Setup

In order to avoid running into CORS issues once we had jQuery to the front end, we are going to install another package in our express app: `npm install CORS` and configure in `app.js`
  ```js
  const cors = require('cors');

  app.use(cors());
  ```

You will also need to run two servers - one for the backend, and one for the front end.
* `nodemon` will run on port 3000 for your API
* `serve -p 4000` will run on port 4000 for you front end

### Partners

* Bryony, Jordan
* Dave, Kelvan
* Gabe, Aaron
* Clark, Nathan
* Thomas, Joseph
* Clint, Connor
* Kollin, Sean     

## Steps

0. Together we will make an ajax call to our **GET /** route and out put all of our todos in the browser.
1. **POST /** You will need to create a form that submits to your post route and adds a todo to the database. Once it is added, you should see it added to the list of todos on the homepage.
2. **DELETE /:id** You will need to add some type of link to each todo so when it is clicked (hint: event listener) the delete route is hit and the todo is removed from the list as well as the database.
3. **PUT /:id** Should allow you to make an update a todo that already exists.

#### BONUS

4. **GET /completed** should show only the completed todos.
5. **GET /incomplete** should show only the incomplete todos.
