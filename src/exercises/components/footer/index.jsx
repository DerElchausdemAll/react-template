import React from "react";
import styles from "./styles.module.css";

const Footer = ({ children, className, ...props }) => {
	return (
		<footer {...props} className={[styles.Footer, className].join(" ")}>
			<div>Hier stehen nette Worte zum Abschluss</div>
		</footer>
	);
};

export default Footer;
