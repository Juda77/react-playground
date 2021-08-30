import React from "react";

export default class MyForm extends React.Component {

  state = {
    username: "",
    password: "",
    missingCredentialMessage: "",
    invalidCredentialsMessage: ""
  }




  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // make call to API to validate the username and password
  validate = () => {

    const usernameInput = this.state.username;
    console.log(usernameInput);
    // update the states missing credentials and invalid credentials
    // according to the API response

    if (usernameInput === "a") {
      this.setState({
        missingCredentialMessage: "sup"
      });
    } else {
      this.setState({
        missingCredentialMessage: "lol"
      });
    }

  }

  handleSubmit = (event) => {

    // prevents the form from being refreshed when clicking submit button
    event.preventDefault();
    this.validate();



  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div
          style={{ fontSize: 12, color: "red"}}>
          {this.state.missingCredentialMessage}
        </div>
        <div
          style={{ fontSize: 12, color: "red"}}>
          {this.state.invalidCredentialsMessage}
        </div>
        <button type="submit">Submit credentials</button>
      </form>
    );

  }

}