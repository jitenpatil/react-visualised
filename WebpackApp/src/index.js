import React from 'react';
import ReactDOM from 'react-dom/client';
import Customer from '../components/Customer.js';

import './style.css'; //* css loader  reads .css and converts  to JS


const customer = {
    id: 1,
    name: "Jiten",
    address: 'USA'
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Customer num = {5} cust={customer}/>);
