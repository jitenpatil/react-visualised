import React from 'react';

export default class CounterClass extends React.Component {
    constructor(props){
        super(props);
        this.state = { counter : 0}
        this.increment = this.increment.bind(this);
    }


    increment(){
        this.setState({counter : this.state.counter + 1});
    }

    render() {
        return (
            <>
                <h1>Class Counter</h1>
                <h2>Count is {this.state.counter}</h2>
                <button onClick={this.increment}>Update</button>
            </>
        );
    }
}