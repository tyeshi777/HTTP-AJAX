import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";
import UpdateFriendForm from "./components/UpdateFriend";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
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

  changeHandler = event => {
    event.persist();
    let value = event.target.value;

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [event.target.name]: value
      }
    }));
  };

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:3333/items/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({ items: res.data });
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Friends List</h1>
          <div>
            <NavLink exact to="/new-friend">
              Add Friend
            </NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/Friends">Friends</NavLink>
          </div>
        </nav>

        <Route path="/" component={Home} />
        <Route
          path="/friends"
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/new-friend"
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />
        <Route
          path="/update-friend"
          render={props => (
            <UpdateFriendForm {...props} updateFriend={this.updateFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
