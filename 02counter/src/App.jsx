import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter,setCounter] =useState(15) 
  
  // let counter = 15;
  const addValue = () => {
    // console.log("No Of Clicks", counter);
    // counter = counter + 1;
    setCounter(counter+1)
  };

  const removevalue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Hello Im Learning React JS</h1>
      <h3>Counter value:{counter}</h3>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <br />

      <button onClick={removevalue}>Remove Value {counter}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
