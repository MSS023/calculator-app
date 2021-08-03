import "./calculator.css";
import Panel from "./panel";

function Calculator(props) {
	return <div className={"calculator "+props.theme}>
		<div className={"screen "+props.theme}>
			9
		</div>
		<Panel theme={props.theme}/>
	</div>
}

export default Calculator;