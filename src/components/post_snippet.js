import React from 'react';
import { Link } from 'react-router';

export default function PostSnippet(props) {
  return (
    <Link to={`/post/${props.post.id}`} className="list-group-item">
      <h4 className="list-group-item-heading">{props.post.title}</h4>
      <p className="list-group-item-text">{props.post.categories}</p>
    </Link>
  )
}
