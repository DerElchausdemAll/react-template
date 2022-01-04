import React from "react";
import styles from "./styles.module.css";

const List = ({ children, className, ...props }) => {
	return (
		<ul {...props} className={[styles.List, className].join(" ")}>
			{children}
		</ul>
	);
};

export default List;
