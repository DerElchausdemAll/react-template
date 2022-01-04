import React from "react";
import styles from "./styles.module.css";

const Checkbox = ({ children, className, ...props }) => {
	return (
		<div>
			<input
				{...props}
				className={[styles.Checkbox, className].join(" ")}
				type="checkbox"
				id="input"
			/>
			<label for="input">{children}</label>
		</div>
	);
};

export default Checkbox;
