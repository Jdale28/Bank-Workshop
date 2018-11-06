import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                This is a summary of your account
                <p>
                    Welcome, {this.props.currentUser.name}!
                </p>
                <p>
                    Your current balance: ${this.props.currentUser.balance}
                </p>
            </div>
        );
    }
}

export default Profile;