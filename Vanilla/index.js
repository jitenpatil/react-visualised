document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.querySelector("#root");
    const h1 = document.createElement('h1');
    h1.innerHTML = "Hello World";
    root.appendChild(h1);
});