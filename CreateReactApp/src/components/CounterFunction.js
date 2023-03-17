import { useReducer } from "react";

const reducer = (state, action) => {
    const activeMap = {
        "inc": ()=>({...state, counter: state.counter+1}),
        "dec":()=>({...state, counter: state.counter-1}),
        "reset":()=>({...state, counter:0})
    }
    return activeMap[action.type]()??state;
}

export default function CounterFunction() {
    
    //const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {counter:1});


    return (
        <>
            <h1>Function Counter</h1>
            <h2>Count is {state.counter}</h2>
            <button onClick={()=>dispatch({type:"dec"})}>-</button>
            <button onClick={()=>dispatch({type:"reset"})}>0</button>
            <button onClick={()=>dispatch({type:"inc"})}>+</button>
        </>
    );
}

//Console ninja