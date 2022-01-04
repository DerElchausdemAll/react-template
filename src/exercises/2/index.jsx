import React from "react";
import Card from "./card";

/**
 * ## Cards
 * 1. Reuse the card from the previous exercise
 * - Create a reusable component with these properties:
 *   - headline
 *   - description
 *   - image
 *
 * 2. Create a Responsive Grid with 5 cards
 * - ! Make sure that there are no errors about the `key` property in the web-console
 */

const items = Array.from({ length: 5 }, () => {
	return {
		headline: "Name",
		description: "Beschreibung",
		image: "https://images.unsplash.com/photo-1579772991680-1194ef83d407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	};
});

const Exercise = () => {
	return (
		// warum hier ne runde Klammer? React?
		<div>
			{items.map((item) => {
				return (
					<Card
						headline={item.headline} //props, die der Karte gegeben werden {headline} etc.
						description={item.description}
						image={item.image}
					/>
				);
			})}
		</div>
	);
};

export default Exercise;

// const items = Array.from({ length: 5 }, () => {
// 	return { headline: "Name", discription: "Beschreibung", image: "" };
// });
// console.log(items);

// const Card = (props) => {
// 	// const Card = ({ headline, description }) => {
// 	const [visible, setVisible] = React.useState(false); // [Boolean, Function]
// 	return (
// 		<div className="card__wrapper">
// 			<div className="card">
// 				<img
// 					src="https://images.unsplash.com/photo-1579772991680-1194ef83d407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
// 					alt="Image of "
// 					className="card__image"
// 				/>
// 				<div className="card__headline">
// 					<h3>{props.headline}</h3>
// 				</div>
// 				{visible ? (
// 					<div className="card__description">
// 						{props.description}
// 						<p>
// 							Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
// 							tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
// 							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea
// 							commodi consequat. Quis aute iure reprehenderit in voluptate velit esse
// 							cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
// 							cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
// 							id est laborum.
// 						</p>
// 					</div>
// 				) : null}
// 				<div className="card__actions">
// 					<button
// 						className="card__actions--button"
// 						onClick={() => {
// 							console.log("irgwas");
// 							setVisible(!visible);
// 						}}
// 					>
// 						{visible ? "Hide" : "Show"}
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// const Exercise = () => {
// 	return (
// 		<div>
// 			{items.map((item) => {
// 				return <Card headline={item.headline} description={item.description} />;
// 			})}
// 		</div>
// 	);
// };

// export default Exercise;
