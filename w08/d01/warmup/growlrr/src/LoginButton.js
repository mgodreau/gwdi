import React from 'react';

export default (props) => {
  return (
    <button onClick={(e) => {
      e.preventDefault()
      var provider = new props.firebase.auth.GoogleAuthProvider();
      props.firebase.auth().signInWithPopup(provider)
    }}>
      {props.children}
    </button>
  )
}
