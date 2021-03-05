import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Thanks'
    //     })
    //     console.log(this)
    // }
    
    clickHandler = () => {
        this.setState({
            message:'THANKS BUDDY'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            </div>
        )
    }
}

export default EventBinding
