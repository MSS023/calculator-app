import React,{useState} from "react";
import './App.css';
import Calculator from "./calculator";

function App() {
  const [obj,setState]=useState(["theme1","1"])
  function handleChange(e) {
	  var theme=e.target.value;
	  setState(["theme"+theme,theme]);
  }
  return (
    <div className={"App "+obj[0]}>
      <div className="row theme-row">
    		<div className="col-9 name">
   				calc
    		</div>
			<div className="col-2 theme">
				<br />
				THEME
			</div>
    		<div className="col-1 theme-selector">
				<label for="theme-slider">1 2 3</label>
				<br />
				<input className={obj[0]} id="theme-slider" type="range" min="1" max="3" step="1" value={obj[1]} onChange={handleChange} />
    		</div>
  		</div>
        <Calculator theme={obj[0]} />
    </div>
  );
}

export default App;
