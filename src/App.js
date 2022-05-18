import "./App.css";
import { useState } from "react";
import Numpad from "./Numpad";

function App() {
  const [expression, setExpression] = useState("");
  const hanleExpressionChnage = (element) => {
    let temp = "";
    expression === "0" ? (temp = element) : (temp = expression + element);

    //console.log(temp);

    setExpression(temp);
  };
  const oneExpression = (element) => {
    const temp = element.toString();
    //console.log(temp);
    setExpression(temp);
  };
  const cutExpression = () => {
    const temp = expression.slice(0, -1);
    console.log(typeof temp);
    setExpression(temp);
  };
  return (
    <>
      <input
        onChange={(event) => {
          setExpression(event.target.value);
          //console.log();
        }}
        value={expression}
      ></input>
      <Numpad
        result={hanleExpressionChnage}
        set={oneExpression}
        data={expression}
        backspace={cutExpression}
      />
    </>
  );
}

export default App;
