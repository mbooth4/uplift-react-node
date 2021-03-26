import React from 'react';

import './FriendList.css'

const FriendList = (props) => {
  return (
    <div className="FriendList">
      <h1>Your Friend List</h1>
      <p>{props.friends[0].name} is Your Top 1 Friend</p>
      <p>{props.friends[1].name} is Your Top 2 Friend</p>
      <p>{props.friends[2].name} is Your Top 3 Friend</p>
    </div>
  );
}

export default FriendList;