import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/checkbox";
import List from "../components/list";
import ListItem from "../components/list-item";

//Test
import "./style.css";
//Test

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
			<Button>Click me</Button>
			<Button className="ExtraStyling">Click me</Button>
			<Checkbox> Alles kapiert?</Checkbox>
			<List>
				<ListItem marker="😇">Item1</ListItem>
				<li>Item2</li>
				<li>Item3</li>
				<li>Item4</li>
				<li>Item5</li>
			</List>
			<ul>
				<li>Item1</li>
				<li>Item2</li>
				<li>Item3</li>
				<li>Item4</li>
				<li>Item5</li>
			</ul>
		</div>
	);
};

export default Exercise;
