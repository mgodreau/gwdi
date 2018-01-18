# Ruby on Rails Cheatsheet

## Architecture

<img src="https://raw.githubusercontent.com/mdang/resources/master/ruby/rails/rails_architecture.png">

## Create a New Rails Application

Install the Rails gem if you haven't done so before

```
$ gem install rails --no-rdoc --no-ri
```

Generate a new Rails app w/ Postgres support and specify use of the rails API

```
$ rails new my_app_name -d postgresql --api
```

Initialize the database through rails

```
$ rails db:create
```

OR create the database by hand in psql to match database name in `database.yml` file

```
CREATE DATABASE database_name;
```

Start the Rails server and open at localhost:3000

```
$ rails s
```

## Scaffolding

Scaffolding is great for prototypes but don't rely too heavily on it: http://stackoverflow.com/a/25140503

```
$ rails g scaffold todo task completed:boolean
```

Run any pending migrations

```
$ rails db:migrate
```

This automagically creates all the routes for a RESTful resource:

```rb
# config/routes.rb
resources :todos
```
We can see all our routes in the controller `todos_controller.rb`.

HTTP Verb | Path | Controller#Action | Used for
--------- | ---- | ----------------- | -------
GET | /todos | todos#index | display a list of all todos
GET | /todos_new | todos#new | return an HTML form for creating a new todo
POST | /todos | todos#create | create a new todo
GET | /todos/:id | todos#show | display a specific todo
GET | /todos/:id/edit | todos#edit | return an HTML form for editing a todo
PATCH/PUT | /todos/:id | todos#update | update a specific todo
DELETE | /todos/:id | todos#destroy | delete a specific todo
