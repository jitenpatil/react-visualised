import React from 'react';
export default class Person extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:1
        };
        // ! We created method with reference to this
        this.boundIncrement = this.increment.bind(this);
    }    
    // ! Bad practice -> arrow function gets added in every object instance
    // increment = () => {
    //     this.setState({count: this.state.count+1});
    // }


    // ! Best practice - create method -> method will be added in prototype(only one)
    // ! Methods dont have protoptypes same as Arrow function
    increment() {
        this.setState({count: this.state.count+1});
    }

    // TODO => Lifecycle methods
    
    // ? static - React dont want us to update. refer docs
    static getDerivedStateFromProps(){
        console.log("1 - Get Derived State From Props");
        return null;
    }

    componentDidMount(){
        console.log("[1] - Component Did Mount");
    }

    shouldComponentUpdate(){
        console.log("2 - Should Component Update");
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("4 - Get Snapshot Before update");
        return null;
    }

    componentDidUpdate() {
        console.log("5 - Component Did Update");
    }

    componentWillUnmount(){
        console.log("6 - Component Will Unmount");
    }

    render(){
        console.log("3 - Render");
        return (<>
            <h1>Counter is {this.state.count}</h1>
            {/* // ! give reference of method to React 
            */}
            <button onClick={this.boundIncrement}>Update</button>
        </>);
    }
}