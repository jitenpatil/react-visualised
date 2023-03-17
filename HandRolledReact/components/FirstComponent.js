import React from "react";
import ReactDOM from "react-dom/client";


class FirstComponent {
    render(){
        return <h1>FirstComponent</h1>;
    };
}


const root = ReactDOM.createRoot(document.querySelector("#new-root"));

const h1 = <h1>Hello First Component</h1>;

root.render(<>
    {h1}
    <FirstComponent/>
</>);
