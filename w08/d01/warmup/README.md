# Growlrr <- the second r is for React ;)

## THE GOAL
Today you'll remake the famed Growlr app, only this time using React for the front end and Firebase for the backend.

## User Stories
### Viewing Growls
- When I land on the home page, I should see a list of everyone's growls
  - I don't need to be logged in to read other users' growls

### Session management
- If I'm not logged in, I should see a button somewhere on the page to log in (via Firebase's Google Oauth)
- Conversely, if I'm logged in I should see a log out button

### Creating/Deleting growls
- Only when I'm logged in should I see a form for adding my own growls
- I should see a delete button next to growls that I created (no one else's), and it should work
- The growls should be no more than 141 characters long (Hint: Create a [validation](https://firebase.google.com/docs/database/security/securing-data#validating_data) in Firebase and show a user friendly error on the front end)


## Groups
- Connor + Gabe
- Dave + Kelvan
- Sean + Nathan
- Clint + Bryony + Clark
- Thomas + Aaron
- Jordan + Joseph

## BONUSES
1. Add a comment button to each growl. When I click said button, I should be taken to a separate page (hint: react-router), where the individual growl is shown, along with a list of comments. I don't have to be logged in to see the comments but I have to be logged in to see the form and add a comment.
2. Time to pivot from Growlrr to Growlstrrgram! Add a file upload button to the growl form for [uploading an image](https://firebase.google.com/docs/storage/web/start). If an image was uploaded with the growl (should be optional), I should see it somewhere with the growl.
