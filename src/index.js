import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "./react-tutorial-playground/01-regular-html-js/databinding.scss";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

let title = "React";
let subTitle = "learning in fun and pleasure";
let titleClass = "headline";
let divMouseX = 0;
let divMouseY = 0;
let divMouseClass = "mouse-div";
let isButtonDisabled = false;
let isDivShowExist = true;
let isCircleDiv = true;

const onInputInputChangeTitle = (event) => {
	const newTitle = event.target.value.trim();
	if (newTitle.length === 0) {
		title = "React";
		renderUI();
		return;
	}
	title = newTitle;
	console.log(newTitle);
	renderUI();
};

const onMousemoveDivMouse = (event) => {
	// console.log(event.nativeEvent);
	divMouseX = event.nativeEvent.offsetX;
	divMouseY = event.nativeEvent.offsetY;

	if (divMouseX > 150 && divMouseY > 150) {
		divMouseClass = "mouse-div blue";
	}

	if (divMouseX > 150 && divMouseY < 151) {
		divMouseClass = "mouse-div yellow";
	}
	if (divMouseX < 150 && divMouseY > 150) {
		divMouseClass = "mouse-div red";
	}
	if (divMouseX < 151 && divMouseY < 151) {
		divMouseClass = "mouse-div green";
	}

	renderUI();
};

const onClickButtonshow = () => {
	isDivShowExist = !isDivShowExist;
	renderUI();
};

const onChangeSelect = (event) => {
	isCircleDiv = event.target.value === "circle";
	renderUI();
};

// צרו ריבוע שבתוכו כתוב את מיקום העכבר הפנימי
// הריבוע מחולק לארבעה ריבועים דימיוניים
// שנו את צבע הריבוע לפי מיקום העכבר בהתאם לריבוע הפנימי

function renderUI() {
	const jsx = (
		<div>
			<h1 className={titleClass}>{title}</h1>
			<h2>{subTitle}</h2>
			<input placeholder="Change title" onInput={onInputInputChangeTitle} />
			<div className={divMouseClass} onMouseMove={onMousemoveDivMouse}>
				x: {divMouseX}; y: {divMouseY}
			</div>
			<button
				disabled={isButtonDisabled}
				onClick={() => {
					alert("I was clicked");
				}}
			>
				{isButtonDisabled ? "Disabled" : "Click on me"}
			</button>
			<button onClick={onClickButtonshow}>{isDivShowExist ? "Remove" : "Show"}</button>
			{isDivShowExist && <div className="div-show">Showing</div>}
			<select onChange={onChangeSelect}>
				<option value="circle">Circle</option>
				<option value="square">Square</option>
			</select>
			{isCircleDiv ? <div className="circle"></div> : <div className="square"></div>}
		</div>
	);
	ReactDOM.render(jsx, document.getElementById("root"));
}
renderUI();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
