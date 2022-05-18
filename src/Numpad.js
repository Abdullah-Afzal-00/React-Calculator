import React from "react";
import { evaluate } from "mathjs";

const Numpad = (props) => {
  const numArray1 = ["1", "2", "3", "4", "5"];
  const numArray2 = ["6", "7", "8", "9", "0"];
  const operationsArray = ["+", "-", "/", "*"];
  return (
    <>
      <ul>
        {numArray1.map((element, index) => (
          <li className="Numbutton">
            <button onClick={() => props.result(element)}>{element}</button>
          </li>
        ))}
        <br></br>
        {numArray2.map((element, index) => (
          <li className="Numbutton">
            <button onClick={() => props.result(element)}>{element}</button>
          </li>
        ))}
        <br></br>
        {operationsArray.map((element, index) => (
          <li className="Numbutton">
            <button onClick={() => props.result(element)}>{element}</button>
          </li>
        ))}
        <li className="Numbutton">
          <button onClick={() => props.set(evaluate(props.data))}>=</button>
        </li>
        <br></br>
        <button onClick={() => props.set("")}>clear</button>
        <button onClick={() => props.backspace()}>Backspace</button>
      </ul>
    </>
  );
};
export default Numpad;
