import React, { Component } from 'react';
import axios from 'axios';

class Credits extends Component{
  // Step 2: Set your state to contain a property called 'savedGifs'
  state = {
    credits: [{
        amount: 0,
        description: "",
        date: ''
    }],
  };

  // Step 3: Call 'componentDidMount' for making your API call
  componentDidMount(){
    // Step 4: Use axios.get to retrieve all saved gifs from our API
    axios.get("http://localhost:4000/credits")
         // Step 5: Save the response array to this.state.savedGifs
         .then((response) => {
           console.log(response)
           const credits = response.data
           this.setState({ credits });
        //    this.setState({savedGifs: savedGifs});
         })
         .catch((error) => {
           console.error("Error: ", error);
         });
  }

  render(){
    const credits = this.state.credits.map((credits, i) => (
        <div className="credits" key={i}>
        <h1>Credit Number {i+1}</h1>
        <p>${credits.amount}</p>
        <p>{credits.description}</p>
        <p>{credits.date}</p>
        </div>
    ))
    return(
        <div>

        <h1 className="transactionHeader">Below are all of your credits</h1>
        <div className="creditContainer">
          {credits}
      </div>
        </div>
    )
  }
}

export default Credits;