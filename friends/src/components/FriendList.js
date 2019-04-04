import React from "react";

const FriendList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div>
          <h3>name: {friend.name}</h3>
          <h4>age: {friend.age}</h4>
          <h4>email: {friend.email}</h4>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
