# Rails Lab: IMDB Clone

## `Movie`
- Attributes: A movie has a `name` and `release_date`. Both fields are required.
- Relationships:
  - A movie can have many genres.
  - A movie can have many roles.
  - A movie can have many actors through roles.

## `Genre`
- Attributes: A genre has a `name`. It's required.
- Relationships: A genre can have many movies

## `Actor`
- Attributes: An actor has a `first_name`, `last_name`, `birth_date` and `washed_up`. `washed_up` is a boolean on whether or not the actor's star has faded. All fields are required.
  - You should create a `name` method.
- Relationships:
  - An actor can have many roles
  - An actor has many movies through roles

## `Role`
- Attributes: A role has a `character_name`. It's required
- Relationships:
  - A role belongs to a movie
  - A role belongs to an actor

# Bonus
Generate **read only** routes.

| VERB | PATH              |
|------|-------------------|
| GET  | /actors           |
| GET  | /actors/:id       |
| GET  | /actors/:id/roles |
| GET  | /movies           |
| GET  | /movies/:id       |
| GET  | /movies/:id/roles |

See how you can nest the roles controller under both the `/actors` and `/movies`
