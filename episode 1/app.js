import React from "react";
import ReactDOM from "react-dom/client";

const heading= React.createElement("h1", { id: "title" }, "Hello World from React");
const jsxHeading =(<h1 id="title">
  Hello World from JSX
  </h1>) ;


const Title =() =>{return(
  <h1 id="title">Hello title injected from Functional component</h1>
)}
  // functional component
  const HeaderComponent = () => {return (
    <>
    <div> <Title /></div>
    <div id="container">
      
       <h1 id="title">Hello World from Functional component</h1>
    </div></>
    
  )};
  

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeaderComponent />);
// console.log(parent);
