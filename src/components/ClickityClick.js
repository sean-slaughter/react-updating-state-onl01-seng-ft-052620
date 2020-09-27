// Code ClickityClick Component Here
import React, { Component } from 'react'

export class ClickityClick extends Component {

    constructor(){
        super();
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        })
    }


    render() {
        return (
            <div>
                <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                    <button onClick={this.handleClick}>Click me!</button>
                 </div>
            </div>
        )
    }
}

export default ClickityClick
