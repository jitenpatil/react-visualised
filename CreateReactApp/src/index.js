import React from 'react';
import ReactDOM from 'react-dom/client';
//import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
//import Customer from './components/Customer';
//import Person from './components/Person';
//import Weather from './components/Weather';
import WeatherFunction from './components/WeatherFunction';
//import CreateRef from './components/CreateRef';
//import University from './components/PropDrilling';
import Form from './components/Form';
//import './style.css'; //* css loader  reads .css and converts  to JS


// const customer = {
//     id: 1,
//     name: "Jiten",
//     address: 'USA'
// };
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <>
      {/* <Customer num = {5} cust={customer}/>
      <Person/> */}
      <div style={{}}>
        {/* <Weather low={25} high={80} city={"Navi Mumbai"} condition={"cloudy"}/>
        <WeatherFunction low={25} high={30} city={"Navi Mumbai"} condition={"suncloud"}/> */}
        {/* <WeatherFunction city="Pune"/>
        <WeatherFunction city="Mumbai"/> */}
        {/* <CounterFunction/> */}
        {/* <University/> */}
        <Form/>
      </div>
    </>);
