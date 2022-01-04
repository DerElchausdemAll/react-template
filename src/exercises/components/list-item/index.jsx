import React from "react";
import styles from "./styles.module.css";

const ListItem = ({ children, marker, className, ...rest }) => {
	return (
		<li {...rest} className={[styles.List, className].join(" ")}>
			{marker} {children}
		</li>
	);
};

export default ListItem;
