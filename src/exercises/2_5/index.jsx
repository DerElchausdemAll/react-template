import React from "react";
import Button from "../components/button";
import Checkbox from "../components/checkbox";
import List from "../components/list";
import ListItem from "../components/list-item";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */

const Exercise = () => {
	return (
		<div>
			<Button className="ExtraStyling">Click me</Button>
			<Checkbox>Hallo</Checkbox>
			<List>
				<ListItem marker="😇">Item1</ListItem>
				<li>Item2</li>
				<li>Item3</li>
				<li>Item4</li>
			</List>
			<ul>
				<li>Item1</li>
				<li>Item2</li>
				<li>Item3</li>
				<li>Item4</li>
			</ul>
		</div>
	);
};

export default Exercise;
