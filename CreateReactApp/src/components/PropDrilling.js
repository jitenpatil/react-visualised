import React from 'react';

const ColorContext = React.createContext({color:"red"});

export default function University(props){
    return <College college="ABC"/>;
}

export function College(){
    return <Student rollNumber="1" name="Jiten"/>;
}

export function Student({rollNumber , name}){
    const context = React.useContext(ColorContext);
    return <>
        <h1 style={{color:context.color}}>{rollNumber} {name}</h1>
    </>;
}