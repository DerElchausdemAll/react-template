import React from "react";

const Card = ({ headline, description, image }) => {
	// const Card = (props) => { ///////// props kommt von React (nicht frei wählbar), kommen von Array
	const [visible, setVisible] = React.useState(false); // [Boolean, Function] gerne aber nochmal detailliert erklären
	return (
		<div className="card__wrapper">
			<div className="card">
				<img src={image} alt="Image of " className="card__image" />
				<div className="card__headline">
					<h3>{headline}</h3>
				</div>
				{visible ? (
					<div className="card__description">
						<p>{description}</p>
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

export default Card;
