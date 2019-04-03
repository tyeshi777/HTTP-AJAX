import React from "react";

const FriendList = props => {
  return (
    <div>
      <h2>Name</h2>
      {props.friends.map(friend => (
        <div>
          <h3>{friend.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
