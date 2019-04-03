import React from "react";

const FriendList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div>
          <h3>name : {friend.name}</h3>
          <h3>email : {friend.email}</h3>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
