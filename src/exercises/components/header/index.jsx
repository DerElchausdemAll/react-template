import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

const Header = ({ children, className, ...props }) => {
	return (
		<header {...props} className={[styles.Header, className].join(" ")}>
			<nav
				style={{
					display: "flex",
					justifyContent: "space-around",
					textDecorationLine: "none",
				}}
			>
				<Link to="/portfolio/home">home</Link>

				<Link to="/portfolio/projects">projects</Link>

				<Link to="/portfolio/about">about</Link>

				<Link to="/portfolio/contact">contact</Link>
			</nav>
		</header>
	);
};

export default Header;
