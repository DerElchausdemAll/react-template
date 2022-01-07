import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/checkbox";
import List from "../components/list";
import ListItem from "../components/list-item";
import Typography from "../components/typography";

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
			<Typography variant="h1">Eine coole Überschrift</Typography>
			<Typography className="irgendwas hallo" foo="Bar" variant="h2" component="h1">
				h1, gestylt als h2 (SEO zuliebe)
			</Typography>
			<Typography component="h1">
				h1 dank component, gestylt als variant="body1": "p" da kein variant angegeben
			</Typography>
			<Typography variant="subtitle2" component="h1">
				h1 gestylt als variant="subtitle2": "h3"
			</Typography>
			<Typography>
				p, da hier weder variant noch component vergeben wird, also greift variant = "body1"
			</Typography>
			<Typography variant="h5" component="h3">
				h3, gestylt als h5
			</Typography>
			<Typography variant="bsad">
				span, da Variant="bsad" nicht in typeVarients existiert
			</Typography>
			<br />
			<br />
			<br />
			<Button>Click me</Button>
			<Button className="ExtraStyling">Click me</Button>
			<Checkbox
				label=""
				onChange={(event_) => {
					console.log(event_.target.checked);
				}}
			/>

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

// Stand 06.01.2022 mit Dennis, Marc etc zusammengecoded

// const Exercise = () => {
// 	return (
// 		<div>
// 			<Typography class="irgendwas" component="h1" variant="h2">
// 				Test
// 			</Typography>
// 			<Typography component="h1" variant="h2">
// 				Test
// 			</Typography>
// 			<Typography component="h1" variant="h2">
// 				Test
// 			</Typography>

// 			<Button>Click me</Button>
// 			<Button className="ExtraStyling">Click me</Button>
// 			<Checkbox
// 				label=""
// 				onChange={(event_) => {
// 					console.log(event_.target.checked);
// 				}}
// 			/>

// 			<List>
// 				<ListItem marker="😇">Item1</ListItem>
// 				<li>Item2</li>
// 				<li>Item3</li>
// 				<li>Item4</li>
// 				<li>Item5</li>
// 			</List>
// 			<ul>
// 				<li>Item1</li>
// 				<li>Item2</li>
// 				<li>Item3</li>
// 				<li>Item4</li>
// 				<li>Item5</li>
// 			</ul>
// 		</div>
// 	);
// };

// export default Exercise;
