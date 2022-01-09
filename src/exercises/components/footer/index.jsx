import React from "react";
import styles from "./styles.module.css";

const Footer = ({ children, ...props }) => {
	return (
		<footer {...props} className={styles.Footer}>
			<div>Footer</div>
		</footer>
	);
};

export default Footer;
