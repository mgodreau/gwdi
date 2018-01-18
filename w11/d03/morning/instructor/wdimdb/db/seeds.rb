Movie.destroy_all
Genre.destroy_all
Actor.destroy_all

m = Movie.create(name: 'Gone With The Wind', release_date: Date.today)

g = Genre.create(name: 'Lifetime')
g.movies << m

g2 = Genre.create(name: 'Action')

a = Actor.create(first_name: 'Clark', last_name: 'Gable', washed_up: false, birth_date: Date.today)

Role.create(character_name: 'Rhett Butler', actor_id: a.id, movie: m)
