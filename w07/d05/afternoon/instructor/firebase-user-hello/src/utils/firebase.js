import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCK-fc4fTTsUW2_SBdpEI1CDrua3p8tAWM",
  authDomain: "ga-todo-list.firebaseapp.com",
  databaseURL: "https://ga-todo-list.firebaseio.com",
  storageBucket: "ga-todo-list.appspot.com",
  messagingSenderId: "1044794170351"
};

firebase.initializeApp(config);

export default firebase;
