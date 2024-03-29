import react from "react";
import styles from "./styles.module.css";

// const Checkbox = ({ children, className, ...props }) => {
// 	return (
// 		<div>
// 			<input
// 				{...props}
// 				className={[styles.Checkbox, className].join(" ")}
// 				type="checkbox"
// 				id="test"
// 			></input>
// 			<label for="test">{children}</label>
// 		</div>
// 	);
// };

// export default Checkbox;

const Checkbox = ({ label, ...props }) => {
	return (
		<label>
			<div>{label}</div>
			<input {...props} className={[styles.Input]} type="checkbox" />
			<div className={styles.Check} />
		</label>
	);
};

export default Checkbox;

// import React from "react";
// import styles from "./styles.module.css";

// const Checkbox = ({ children, className, ...props }) => {
// 	return (
// 		<div>
// 			<input
// 				{...props}
// 				className={[styles.Checkbox, className].join(" ")}
// 				type="checkbox"
// 				id="input"
// 			/>
// 			<label for="input">{children}</label>
// 		</div>
// 	);
// };

// export default Checkbox;
