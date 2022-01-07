import React from "react";
import { Link } from "react-router-dom";
// import Button from "../components/Button";
import styles from "./styles.module.css";

const Header = ({ children, className, ...props }) => {
	return (
		<header {...props} className={[styles.Header, styles.Nav, className].join(" ")}>
			<nav>
				<Link class="Nav" to="/portfolio/about-me">
					home
				</Link>

				<Link class="Nav" to="/portfolio/project">
					project
				</Link>

				<Link class="Nav" to="/portfolio/skills">
					about
				</Link>

				<Link class="Nav" to="/portfolio/contact">
					contact
				</Link>
			</nav>
		</header>
	);
};

export default Header;
