# React Book Worm!

Your task is to create an app where people can keep track of their favorite books - both read and unread - with React!

### Set Up
```bash
$ create-react-app bookworm
$ cd bookworm
$ npm run start
```

### Steps
- Start by creating a simple Book component that has a title, author, and book cover image  
- Make sure to create a parent component (maybe Library or BookList) for all your books to go inside and render that to the ReactDOM
- Now create a list of Books that you can iterate through to render the Book component for each.
> HINT: What data type should you use for each book?

- Now, you will want to create a form so users can add another book to the list
- Go back and modify the Book component so that you can mark each book as read or unread 

### Bonus
- Create three buttons that filter your list to show only books that you are read, unread OR all books
> HINT: When the search form is empty, you should see the original array of books

- Search through library for a specific book
