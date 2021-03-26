import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className="Post">
      <h5>{props.user}</h5>
      <p>{props.post}</p>
    </div>
  );
}

export default Post;