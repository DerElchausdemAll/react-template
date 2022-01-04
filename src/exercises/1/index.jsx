import React from "react";
import "./style.css";

/**
 * ## Card
 *  1. Create a card with an image, a headline and a description
 *  2. Add a button
 *      When the user clicks the button
 *      Then the description toggles
 *      And The button text changes
 */

// <div className="hello"</div>
// => React.createElement("div", {className: "hello"})

// const myDiv = document.createElement("div")
//myDiv.className = "hello"

const Exercise = () => {
	const [visible, setVisible] = React.useState(true); // [Boolean, Function]
	return (
		<div className="card__wrapper">
			<div className="card">
				<img
					src="https://images.unsplash.com/photo-1579772991680-1194ef83d407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					alt="Image of "
					className="card__image"
				/>
				<div className="card__headline">
					<h3>Camel</h3>
				</div>
				{visible ? (
					<div className="card__description">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
							tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea
							commodi consequat. Quis aute iure reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
							cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
							id est laborum.
						</p>
					</div>
				) : null}
				<div className="card__actions">
					<button
						className="card__actions--button"
						onClick={() => {
							console.log("irgwas");
							setVisible(!visible);
						}}
					>
						{visible ? "Hide" : "Show"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Exercise;
