import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

class Profile extends Component {
    state = {
        balance: 0,
        credits: {
            amount: 0
        },
        debits: {
            amount: 0
        }
    }

    componentDidMount() {
        axios
          .get("http://localhost:4000/debits")
          .then(response => {
              console.log(response)
            const debits = response.data;
            this.setState({ debits });
          })
          axios
          .get("http://localhost:4000/credits")
          .then(response => {
              console.log(response)
            const credits = response.data;
            this.setState({ credits });
          })
          .catch(error => {
            console.error("Error: ", error);
          });
      }
    
    //FUNCTION START
    //with credits, add them all together
    //with debits, add them all together, mutliply by -1
    //add credits to debits
    //display amount i
    //FUNCTION END

  render() {
    return (
      <div>
        This is a summary of your account
        <p>Welcome, Isabella!</p>
        <p>Your current balance: ${this.state.balance}</p>
        <p><a href="/profile/credits">Link to your Credits</a></p>
        <p><a href="/profile/debits">Link to your Debits</a></p>
      </div>
    );
  }
}

export default Profile;
