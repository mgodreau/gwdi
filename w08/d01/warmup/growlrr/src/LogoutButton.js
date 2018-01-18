import React from 'react';

export default (props) => {
  return (
    <button onClick={(e) => {
      e.preventDefault()
      props.firebase.auth().signOut()
    }}>
      {props.children}
    </button>
  )
}
