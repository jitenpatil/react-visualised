//import React from 'react';
//import ReactDOM from 'react-dom/client';

/*
const user = "Jiten Patil";
// we pass style object in JSX style attribute
const style = {
    backgroundColor: "orange",   //only camelCase properties work in react
    color: "white"
};

//Curly braces outside JSX is object
const result = {user};
console.log(result);

const root = ReactDOM.createRoot(document.querySelector("#root"));
//const h1 = React.createElement("h1", null, "Hello, HandRolledReact");
//React String interpolation ==> <h1 style={style}>React user : {user} and { 1 + 2%2 }</h1>
//Curly braces inside JSX is also called Expression
const link1 = <a href="https://reactjs.org">Link1</a>;
const link2 = <a href="https://reactjs.org">Link2</a>;


const div = <div>
                <h1 style={style}>React user : {user} and { 1 + 2%2 }</h1>
                <h2 style={{color:"red"}}> Inline CSS - Kebab case property Names dont work </h2>
            </div>
*/
/* 
 Components must begin with UpperCase
*/

/*
class FirstComponent extends React.Component{
    constructor(props){
        super(props);
    }

    //should return JSX, which will be rendered by React on the Browser
    render(){
        return(
            <>
                <h1>FirstComponent</h1>
                <p>{typeof this.props.id}</p>
                <p>{typeof this.props.name}</p>
                <p>{typeof this.props.addr['city']}</p>
            </>) ;
    };
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
const h1 = <h1>JSX tags should be in Lowercase</h1>;
root.render(<>
    <FirstComponent id={1} name={"Jiten Patil"} addr={{addr1:"Main Street", city:"New york"}}/>
    {h1}
</>);
*/
//console.log(div); //React.createElement return a object

// ! 27-02-23

import React from 'react';
import ReactDOM from 'react-dom/client';

class ClassComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <h2>Class Component</h2>
    };
}

function FunctionComponent() {
    return <h2>Function Component</h2>
}

const ArrowComponent = props => <h2>Arrow Component</h2>;


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<>
    <div><ClassComponent/></div>
    <div><FunctionComponent/></div>
    <div><ArrowComponent/></div>
</>);