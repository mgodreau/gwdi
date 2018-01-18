import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  let deleteButton = null;
  if (props.user.uid === props.growl.uid) {
    deleteButton = <button onClick={e => {
      e.preventDefault()
      props.firebase.database().ref(`/growls/${props.id}`).remove()
    }}>Delete</button>
  }
  return (
    <li>
      <Link to={`/growls/${props.id}`}>
        {props.growl.growl}
      </Link>
      {' '}
      {deleteButton}
    </li>
  )
}
