import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState("blue");
	// count = currentState , function that allows to update

	function decrementCount() {
		setCount((prevCount) => prevCount - 1);
		setTheme("blue");
		// setTheme(("blue") => count < 0);
	}

	function incrementCount() {
		setCount((prevCount) => prevCount + 1);
		setTheme("red");
	}

	return (
		<>
			<button onClick={decrementCount}>-</button>
			<span style={{ color: theme }}>{count}</span>
			<span>{theme}</span>
			<button onClick={incrementCount}>+</button>
		</>
	);
};

export default Counter;
