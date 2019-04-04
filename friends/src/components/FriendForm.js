import React from "react";

class FriendForm extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };
  render() {
    return (
      <div>
        <form>
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
