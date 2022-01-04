import React from "react";
import Button from "../components/Button";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */

// const buttonItems = Array.from({ length: 10 }, () => {
// 	return console.log("Hello Button");
// });

// const Exercise = () => {
// 	return (
// 		<div>
// 			{buttonItems.map((buttonItem) => {
// 				return <Button />;
// 			})}
// 		</div>
// 	);
// };

const Exercise = () => {
	return (
		<div>
			<Button className={"Irgendwas"}>Click me</Button>
		</div>
	);
};

export default Exercise;
