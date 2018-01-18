# Growler

## THE GOAL
- Twitter may be dominant today, but let's start working on the next big thing. You're going to make a micro blogging application called **GROWLER**. All the cool things we've covered this unit will be put to use!

- **User stories:**
  - A user can write growls (micro blogs) of 141 characters maximum
  - A user can see all the growls that have been written

## Groups

  - Kelvan + Aaron
  - Clint + Joseph
  - Dave + Jordan
  - Connor + Nathan
  - Clark + Sean
  - Kollin, Gabe, Thomas, Bryony

## PHASES

### PHASE 1 - SET UP A GIT REPO
- Using GitHub, set up a public repository and add your partner as a collaborator
- Remember to push your commits so that your partner can pull the code down when it's their turn to program
> Hint: Merge conflicts will occur! Don't freak out! This is the time to figure out how sharing code works.

### PHASE 2 - BUILD THE API
- Time to set up a `GET` route and a `POST` route to show all growls and create a new growl
- Use mLab to create a shared database and store the growls

### PHASE 3 - AJAX
- You will need AJAX calls to:
  - Show all the growls
  - Submit a form to create a new growl

### PHASE 4 - Authenticate
- Using Auth0, lock down both sides
- Make sure when you create a growl, it has a user id from Auth0 as well as an `_id` from mongoose.

### PHASE 5 - Deploy
- Deploy your working app to Heroku!

### PHASE 6 - Presentations!
- Everyone will show their creations at the end of the day!
- Things you will cover:
  - Demo
  - Show some code
  - What did you struggle with / How did you solve it?
  - Things to do differently
- **Every one has to talk**


### BONUSES
  - Allow users to delete their own growls (not anyone else's)
  - Allow a user to see their own growls on a separate 'profile' page. For example, `growlr.com/my_cool_username`. What additional info would you need to store about growls, and users?
  - Create an admin that can delete any growls from any users
