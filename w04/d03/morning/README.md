# Intro to Express

### Objectives
*After this lesson, students will be able to:*

- Describe what Express is
- Install Express
- Start an Express server
- Explain what middleware is used for
- Describe how a templating engine works in Express
- Define routes for different HTTP methods
- Explain how to capture and use parameters
- Automatically restarting the Node.js server during development
- Explain how to serve static content
- Develop a web application with Express

## What is Express?
Today we'll be talking about expressJS the "e" in the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)) - full stack JavaScript. Which incidentally is super buzz wordy right now.

Express is a framework built on top of node.

> Node.js is not a framework. It is an application runtime environment that allows you to write server-side applications in javascript. Javascript that does not depend on a browser.

Express.js is a simple, unopinionated web framework for Node.js that provides a robust set of features to develop web and mobile applications. It facilitates a rapid development of Node based Web applications.

Its biggest highlights are:

- Extremely lightweight
- Easy to create routes
- Very simple to apply middleware

What does it allow us to do?

- Allows to set up middlewares to respond to HTTP Requests
- Defines a routing table which is used to perform different action based on HTTP Method and URL
- Allows to dynamically render HTML Pages based on passing arguments to templates

### Requirements

If you haven't already done so, install the [Express Generator](http://expressjs.com/starter/generator.html) by running the following command in terminal:

```
$ npm install express-generator -g
```

The ```-g``` flag tells NPM to install this package globally, which means we only need to install it once and can now run the ```express``` command from any directory.

### Set environment variables needed for your app

At the very least, let's make sure your machine is set up to be the in development mode. This is the time you would also add any database connection strings, etc needed. If you've already done this before, you can skip to the next step.

```
$ atom ~/.bash_profile
```

Make sure you have the following line anywhere in your bash profile:

```
export NODE_ENV="development"
```

Save the file, and either restart the terminal to apply the changes or run the following command in the terminal instead:

```
$ source ~/.bash_profile
```

## Hello-World Express Setup

Get to it:

1. `mkdir hello-express`
2. `cd hello-express`
3. `npm init -y`
4. `npm install express --save`
5. `touch app.js` in `hello-express` directory

`$ npm init` will initialize a new NodeJS application. Upon initialization it
will prompt you for some user input to update the package.json. The flag -y, or --yes, will use only defaults and not prompt you for any options.

If we hit enter and use all of the default values and we take a look at the
contents of the package.json file, we'll see something like this.

```bash
$ cat package.json
{
  "name": "hello-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

> The `package.json` file contains meta data about your app or module. More
importantly, it includes the list of dependencies to install from npm when
running npm install.

The next thing I'd like to do is install the express node module. In the
terminal:

```bash
$ npm install --save express
```

The `--save` flag allows us to update the package.json to include the
dependency you just installed.

As we saw during `npm init`, the default file for a node app is "index.js". The is the default file for a node app so make sure to change it to "app.js".

Let's make a new file `$ touch app.js` and place the following contents. In
`app.js`:

```javascript
// app.js

var express = require("express");
var app = express();

app.listen(3000, function(){
  console.log("app listening on port 3000");
});

app.get("/", function(request, response){
  response.send("Hello World!");
});

```

```bash
node app.js
```

Navigate to `http://localhost:3000` and voila!

### Nodemon Reloader

The fix for refreshing the server each time we make an update? Nodemon!

In the terminal:

```bash
$ npm install --global nodemon
```

When using the `--global` flag (-g for short), we're specifying that nodemon
will be installed "globally" (not per project) so we can utilize nodemon across
all of our node applications.

Then we start up our application a bit differently now. In the terminal:

```bash
$ nodemon app.js
```

## Routing in Express

Let's look at routes and handler callback functions in Express routes:

```javascript
app.get('/', function(request, response) {
  response.send('homepage');
});
```
Routes in Express are created using methods named after HTTP verbs. In the example above, we created a route to respond to GET requests at the root of the app. You will have a corresponding method on the app object for all the HTTP verbs. In this example, we'll send back the `homepage` view as a response.


## Templates in Express

Express comes with a default templating engine called Pug (formerly JADE), a high performance template engine heavily influenced by HAML. Pug simplifies writing HTML by eliminating the need for parts of HTML tags and utilizing white space. Feel free to explore this on your own!

We'll be using another common templating engine called EJS (Embedded JavaScript) since it's similar to ERB (used for Ruby).

Instead of sending some text when we hit our site let's have it serve an entire index page.

#####Install EJS

First we need to install the EJS package with npm:
```bash
npm install ejs --save
```
You can uninstall from a project with:

```bash
npm uninstall ejs --save
```

#####Set the view
```js
app.set('views', './views');
app.set('view engine', 'ejs');
```

### Rendering the View

Again, we'll use EJS, at least in the beginning, because the syntax has a gentle learning curve. To change your rendering engine you'll need to edit your apps configuration in `app.js`. We also have to change what happens when a user GETs '/'. Let's get it to render our index template instead of sending 'Hello World'.

```js
app.get('/', function(request, response) {
  response.render('index');
});
```

### Creating Views in Express

How about an EJS index page:

```bash
touch views/index.ejs
```

And add this code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Welcome to Express!</title>
  </head>

  <body>
    <h1>Introduction to Express</h1>
    <div class="container">
      <p> This is a paragraph of text. Yay!</p>
    </div>
  </body>
</html>
```

## Params

##### Capturing and using parameters

**req.body**

```js
var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  console.log(req.body);
  res.json(req.body);
})
```

**URL Params**

```js
app.get("/:name", function(req, res){
  res.send("hello " + req.params.name);
});

// using rendering
app.get("/:name",function (req,res){
  res.render("index", {
    name: req.params.name
  });
});
```

```html
//index.ejs
<h1>Hello, <%= name %>!</h1>
```

## Middleware

Middleware is code that can be executed anywhere between a request and a response.

Add the following to your `app.js` file:

```javascript
// Middleware
app.use(function(request, response, next) {
  console.log('Time:', Date.now());
  next();
});
```

#### Error handling middleware

Error-handling middleware is defined like other middleware, except with four arguments instead of three

```JS
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

####Static Content

This is also a great time to note how we serve static assets. Let's link a stylesheet in our layout file.

```html
<link rel="stylesheet" type="text/css" href="/css/styles.css">
```

 We are able to do this, because in our app.js we use `app.use(express.static(__dirname + '/public'))` in our code base. This allows us to utilize files in that folder in the layout.

```js
app.use(express.static(__dirname + '/public'))); // Serve static content (css, etc) for the app from the “public” directory in the application directory
```
## Routes

Let's build support for a new route to add a user [http://localhost:3000/users/new](http://localhost:3000/users/new).

Open up ```/routes/users.js``` and add the following code to handle the new route. The routes directory will be automatically created with express-generator.

```js
// /routes/users.js
var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
	res.send('Show a form to add a new user');
});

module.exports = router;
```

We can now go to [http://localhost:3000/users/new](http://localhost:3000/users/new) and see a response, but this isn't very useful. We'll probably want to create a form on a view and render that instead.

Let's change the code to render a view instead of outputting text in the response.

```js
// /routes/users.js
router.get('/new', function(req, res, next) {
	res.render('users/new');
});
```

The code above is going to look for a view file called ```new.ejs``` inside the ```/views/users/``` subdirectory.

**NOTE:** We haven't created the view required, so the route won't work just yet. We'll fix that in just a little bit.

## Restful Routing

We use the RESTful standard to build our web apps. At the moment, we've just covered how to handle GET requests, but we can create callbacks for all types of requests. For example, if we wanted to create a restful controller for the resource `users`, it would look like:

```js
// /routes/users.js
router.get('/', function(req, res) {
  // INDEX: Return all the users
});

router.get('/:id', function(req, res) {
  // SHOW: Retrieve one user by ID
});

router.get('/new', function(req, res) {
  // NEW: Display form to add a new user
});

router.post('/', function(req, res) {
  // CREATE: Create a new user
});

router.get('/:id/edit', function(req, res) {
  // EDIT: Show the form for editing a user
});

router.put('/:id', function(req, res) {
  // UPDATE: Update an existing user
});

router.delete('/:id', function(req, res) {
  // DELETE: Delete an existing user
});
```

We've defined that the endpoint for the `user` resource will be "/users".
So the code above will create these 7 routes:

```js
GET    /users
GET    /users/:id
GET    /users/new
POST   /users
GET    /users/:id/edit
PUT    /users/:id
DELETE /users/:id
```
