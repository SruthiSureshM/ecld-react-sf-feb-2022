import React from 'react';


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        }
    }
    handleIncrement = () => {
        this.setState({
            value:this.state.value + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            value:this.state.value - 1
        })
    }

    render(){
        return(
            <div>
            
                <h1>{this.state.value}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )

}
}

export default Counter;