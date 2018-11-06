import React, { Component } from "react";
import axios from "axios";

class Debits extends Component {
  // Step 2: Set your state to contain a property called 'savedGifs'
  state = {
    debits: [
      {
        amount: 0,
        description: "",
        date: ""
      }
    ]
  };

  // Step 3: Call 'componentDidMount' for making your API call
  componentDidMount() {
    // Step 4: Use axios.get to retrieve all saved gifs from our API
    axios
      .get("http://localhost:4000/debits")
      // Step 5: Save the response array to this.state.savedGifs
      .then(response => {
        console.log(response);
        const debits = response.data;
        this.setState({ debits });
        //    this.setState({savedGifs: savedGifs});
      })
      .catch(error => {
        console.error("Error: ", error);
      });
  }

  render() {
    const debits = this.state.debits.map((debits, i) => (
      <div className="debits" key={i}>
        <h1>Credit Number {i + 1}</h1>
        <p>${debits.amount}</p>
        <p>{debits.description}</p>
        <p>{debits.date}</p>
      </div>
    ));
    return (
      <div>
        <h1 className="transactionHeader">Below are all of your debits</h1>
        <div className="debitContainer">{debits}</div>
      </div>
    );
  }
}

export default Debits;
