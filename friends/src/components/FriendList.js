import React from "react";

const FriendList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div>
          <h3>name: {friend.name}</h3>
          <h2>email: {friend.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
