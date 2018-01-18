User.destroy_all
Profile.destroy_all
Restaurant.destroy_all
Category.destroy_all
Review.destroy_all

User.create(email: 'foo@bar.com')

u = User.new
u.email = 'anotheremail@yahoo.com'
u.save
u.create_profile(first_name: 'Foo', last_name: 'Bar')

p = Profile.new
p.first_name = 'Sally'
p.last_name = 'Johnson'
p.user_id = User.find_by(email: 'foo@bar.com').id
p.save

r = Restaurant.create(name: "McDonald's")
r.foods.create(name: "Big Mac")

Food.create(name: "Royale with Cheese", restaurant_id: r.id)


r.categories.create(name: 'Fast Food')

c = Category.create(name: 'Junk Food')
c.restaurants << r

Review.create(rating: 1, description: 'This is junk', user: u, restaurant: r)
