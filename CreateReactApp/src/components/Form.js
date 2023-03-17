import { useState } from "react";

export default function Form(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handler = event => {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <form onSubmit={handler}>
            <input value={username} onChange={(event)=>setUsername(event.target.value)} type="text"/>
            <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password"/>
            <button type="submit">Submit</button>
        </form>
    );
}