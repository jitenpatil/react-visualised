import React from 'react';

import PropTypes from 'prop-types';

export default function Customer(props){
    return <h3>{props.cust.id}{props.cust.name}</h3>;
}

Customer.propTypes = {
    num: PropTypes.number,
    cust: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        address: PropTypes.string
    })
};