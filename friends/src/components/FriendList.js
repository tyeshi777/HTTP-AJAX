import React from "react";

const FriendList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div>
          <div>
            {friend.name} <button>remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
