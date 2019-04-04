import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
        <FriendForm />
      </div>
    );
  }
}

export default App;
