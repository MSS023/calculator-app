import "./calculator.css";

function Calculator(props) {
	return <div className={"calculator "+props.theme}>
		<div className={"screen "+props.theme}>
			9
		</div>
		<div className={"panel "+props.theme}>
			<div className="container">
				<div className="row">
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="7" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="8" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="9" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"clear key "+props.theme} type="button" value="DEL" />
					</div>
				</div>
				<div className="row">
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="4" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="5" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="6" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="+" />
					</div>
				</div>
				<div className="row">
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="1" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="2" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="3" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="-" />
					</div>
				</div>
				<div className="row">
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="." />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="0" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="/" />
					</div>
					<div className={"col-3 button "+props.theme}>
						<input className={"key "+props.theme} type="button" value="x" />
					</div>
				</div>
				<div className="row">
					<div className={"col-6 button "+props.theme}>
						<input className={"clear key "+props.theme} type="button" value="RESET" />
					</div>
					<div className={"col-6 button "+props.theme}>
						<input className={"equal clear key "+props.theme} type="button" value="=" />
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default Calculator;