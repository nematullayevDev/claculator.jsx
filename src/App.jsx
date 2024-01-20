import { useState } from "react";
import Header from "./calc.header";

function App() {
const [resoult, setResoult] = useState("")


const hedelclick = (e) => {
  setResoult(resoult.concat(e.target.name))
}

const Reset = () => {
  setResoult("")
}

const Del = () => {
  setResoult(resoult.slice(0, resoult.length -1))
}

const calculate = () => {
  setResoult(eval(resoult).toString())
}

  return (
    <div className="container">
      <Header />

      <div className="window">
       <input type="text" className="window_calc" value={resoult} />
      </div>

      <div className="calc_elementary">
        <div className="numbers">
          <button name="7" onClick={hedelclick} className="buttons">7</button>
          <button name="8" onClick={hedelclick} className="buttons">8</button>
          <button name="9" onClick={hedelclick} className="buttons">9</button>
          <button name="" onClick={Del} className="delete_btn">DEL</button>
          <button name="4" onClick={hedelclick} className="buttons">4</button>
          <button name="5" onClick={hedelclick} className="buttons">5</button>
          <button name="6" onClick={hedelclick} className="buttons">6</button>
          <button name="+" onClick={hedelclick} className="buttons">+</button>
          <button name="1" onClick={hedelclick} className="buttons">1</button>
          <button name="2" onClick={hedelclick} className="buttons">2</button>
          <button name="3" onClick={hedelclick} className="buttons">3</button>
          <button name="-" onClick={hedelclick} className="buttons">-</button>
          <button name="." onClick={hedelclick} className="buttons">.</button>
          <button name="0" onClick={hedelclick} className="buttons">0</button>
          <button name="/" onClick={hedelclick} className="buttons">/</button>
          <button name="*" onClick={hedelclick} className="buttons">X</button>
        </div>
        <div className="equal">
          <button className="equal_btn"onClick={Reset} >RESET</button>
          <button className="equal_btn2" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
