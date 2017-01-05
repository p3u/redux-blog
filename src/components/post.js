import React from 'react';
import { Link } from 'react-router';

export default function Post(props) {
  const categories = Array.from(new Set(props.postData.categories.split(' ')));

  const rainbownizer = {
    0: 'label-primary',
    1: 'label-success',
    2: 'label-info',
    3: 'label-warning',
    4: 'label-danger',
  }

  const labels = categories.map((category, idx) => {
      return <span key={idx}>
              <span className={`label ${rainbownizer[idx % 5]}`}>
                {category}
              </span> </span>
  })

  return (
    <div className="panel panel-default">
      <div className="panel-heading"><h3>{props.postData.title}</h3></div>
      <div className="panel-body">
        {props.postData.content}
      </div>
      <div className="panel-footer">{labels}</div>
    </div>
  )
}
