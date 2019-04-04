import React from "react";

const Home = props => {
  const navigateToFriend = e => {
    e.preventDefault();
    props.history.push("/Friends");
  };
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button onClick={navigateToFriend}>Friends!</button>
    </div>
  );
};

export default Home;
