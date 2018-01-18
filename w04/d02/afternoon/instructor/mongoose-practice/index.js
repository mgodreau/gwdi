require('dotenv').config({ silent: true });

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Todo = require('./models/todo');


// READ COLLECTION
Todo.find({}, function (err, todos) {
  if (err) {
    console.error(err);
  } else {
    console.log(todos);
  }
})

// READ MEMBER
Todo.findOne({
  _id: '57fd4a90d22abf2412f0be99'
}, function (err, todo) {
  if (err) {
    console.error(err);
  } else {
    if (todo) {
      console.log(todo);
    } else {
      console.log('TODO NOT FOUND');
    }
  }
})

// UPDATE
Todo.findOne({
  _id: '57fd4a90d22abf2412f0be99'
}, function (err, todo) {
  if (err) {
    console.error(err);
  } else {
    if (todo) {
      console.log(todo);
      var updatedTodo = Object.assign(todo, { completed: false, task: 'Burp Jack Boy' })

      updatedTodo.save(function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log(updatedTodo);
        }
      })
    } else {
      console.log('TODO NOT FOUND');
    }
  }
})

// DELETE
Todo.findOne({
  _id: '57b743ab76a6718c3d436bc5'
}, function (err, todo) {
  if (err) {
    console.error(err);
  } else {
    if (todo) {
      console.log(todo);
      todo.remove(function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log('TODO WAS DELETED');
        }
      })
    } else {
      console.log('TODO NOT FOUND');
    }
  }
})

// CREATE
var todo = new Todo({
  task: 'Burp Jackson',
  completed: false,
  userId: '1'
})

todo.save(function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log(todo);
  }
})
