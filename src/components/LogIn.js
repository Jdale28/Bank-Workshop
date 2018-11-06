import React, { Component } from 'react';

class User extends Component {
    state = {
        newUser: {
            name: "",
            balance: ""
        }
    }

    handleChange = (e) => {
        // Makes a clone of state newUser and brings it into the function
        const newUser = { ...this.state.newUser}
        // const value = e.target.value
        // const name = e.target.name
        const { name, value } = e.target
        newUser[name] = value
        this.setState({newUser})
        // this.setState({newUser: newUser})
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.newUser)
        this.props.history.push('/profile')
    }

    render() {

        return (
            <div>
                <h1>
                    Log In component
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Your Name" name="name" value={this.state.newUser.name} onChange={this.handleChange}/>
                    <label htmlFor="balance">Balance</label>
                    <input type="text" placeholder="Enter Your Balance" name="balance" value={this.state.newUser.balance} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default User;