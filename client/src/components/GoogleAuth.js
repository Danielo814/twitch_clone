import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn = null };

  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "604334040053-tci2as0f3h7rngjv58meiq3dm07ka4bq.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState = this.auth.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });
        });
    });
  }

  renderAuthButton() {
      if (this.state.isSignedIn === null) {
          return <div>I don't know if we are signed in.</div>
      } else if (this.state.isSignedIn) {
          return <div>I am signed in!</div>
      }
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
