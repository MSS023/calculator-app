import "./calculator.css";
import React,{useState} from "react";

function Calculator(props) {
	const [current,setCurrent]=useState("0");
	function handleKey(e) {
		var value=e.target.value;
		if(current==="0")
			setCurrent(value);
		else
		{
			var newcurrent=current+value;
			setCurrent(newcurrent);
		}
	}
	function handleDel(e) {
		if(current.length>1)
			setCurrent(current.slice(0,current.length-1));
		else
			setCurrent("0");
	}
	function handleReset() {
		setCurrent("0");
	}
	function handleSign(e) {
		var sign=e.target.value;
		const last=current.slice(-1);
		if(last==="+" || last==="-" || last==="*" || last==="/")
		{
			if(sign!=="x")
				setCurrent(current.slice(0,current.length-1)+sign);
			else
				setCurrent(current.slice(0,current.length-1)+"*")
		}
		else
		{
			if(sign!=="x")
				setCurrent(current+sign);
			else
				setCurrent(current+"*");
		}
	}
	function handleEqual(e) {
		const last=current.slice(-1);
		var newcurrent;
		if(last!=="+" && last!=="-" && last!=="*" && last!=="/")
		{
			try {
				var ans=eval(current), round=Math.round(eval(current));
				if(ans===round)
					newcurrent=ans.toString(10);
				else
					newcurrent=ans.toFixed(6).toString(10);
				setCurrent(newcurrent);
			}
			catch (error) {
				alert("Unexpected expression");
			}
		}
		else
			alert("invalid expression");
	}
	function handleKeyPress(e){
		var key=e.key;
		var newcurrent;
		if((key>="0" && key<="9") || key==="." )
		{
			var value=key;
			if(current==="0")
				setCurrent(value);
			else
			{
				newcurrent=current+value;
				setCurrent(newcurrent);
			}
		}
		else if(key==="Backspace")
		{
			if(current.length>1)
				setCurrent(current.slice(0,current.length-1));
			else
				setCurrent("0");
		}
		else if(key==="+" || key==="-" || key==="*" || key==="x" || key==="/")
		{
			var sign=key;
			const last=current.slice(-1);
			if(last==="+" || last==="-" || last==="*" || last==="/")
			{
				if(sign!=="x")
					setCurrent(current.slice(0,current.length-1)+sign);
				else
					setCurrent(current.slice(0,current.length-1)+"*")
			}
			else
			{
				if(sign!=="x")
					setCurrent(current+sign);
				else
					setCurrent(current+"*");
			}	
		}
		else if(key==="=" || key==="Enter")
		{
			const last=current.slice(-1);
			if(last!=="+" && last!=="-" && last!=="*" && last!=="/")
			{
				try {
					var ans=eval(current), round=Math.round(eval(current));
					if(ans===round)
						newcurrent=ans.toString(10);
					else
						newcurrent=ans.toFixed(6).toString(10);
					setCurrent(newcurrent);
				}
				catch (error)
				{
					alert("Unexpected expression");
				}
			}
			else
				alert("invalid expression");
		}
		else if(key==="Escape")
		{
			setCurrent("0");
		}
	}
	
	return <div className={"calculator "+props.theme} onKeyDown={handleKeyPress} tabIndex="0">
		<div className={"screen "+props.theme}>
			{current}
		</div>
		<div className={"panel "+props.theme}>
			<div className="container">
				<div className="row">
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="7" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="8" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="9" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"clear key "+props.theme} type="button" value="DEL" onClick={handleDel}/>
					</div>
				</div>
				<div className="row">
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="4" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="5" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="6" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="+" onClick={handleSign}/>
					</div>
				</div>
				<div className="row">
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="1" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="2" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="3" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="-" onClick={handleSign}/>
					</div>
				</div>
				<div className="row">
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="." onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="0" onClick={handleKey}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="/" onClick={handleSign}/>
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="x" onClick={handleSign}/>
					</div>
				</div>
				<div className="row">
					<div className={"col-6 button "+props.theme}>
						<input className={"clear key "+props.theme} type="button" value="RESET" onClick={handleReset}/>
					</div>
					<div className={"col-6 button "+props.theme}>
						<input className={"equal clear key "+props.theme} type="button" value="=" onClick={handleEqual}/>
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default Calculator;