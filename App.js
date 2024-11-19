import React from "react";
import ReactDOM from "React-dom/client"


// jsx => Babel is traspiles it React.CreateElement  => ReactElement-javascript(object) => HTMLElement(Render)


const elem = <span>amaste</span>;

const Test = () => (
  <h1>
    {elem}
    Good Morning
  </h1>
);

const number = 1000;
const Heading = () => (
  <div id="container">  
    <h2>{number}</h2>
    <h1>hello react from Sateesha!</h1>
  </div>
);

 const root = ReactDOM.createRoot(document.getElementById("root"));


 root.render(<Heading />)