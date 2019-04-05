import React from "react";

class FriendForm extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };

  changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "price") {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className="formInput"
              type="text"
              name="name"
              placeholder="enter name"
              value={this.state.friend.value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              className="formInput"
              type="number"
              name="age"
              placeholder="enter age"
              value={this.state.friend.value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              className="formInput"
              type="email"
              name="email"
              placeholder="enter email"
              value={this.state.friend.value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Add Friend</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FriendForm;
