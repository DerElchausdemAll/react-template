import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
	display: flex,
	justifyContent: space-around,
	textDecorationLine: none,
	background: red
`;

const Header = ({ children, className, ...props }) => {
	return (
		<header {...props}>
			<StyledNav>
				<Link to="/portfolio/home">homesadasd</Link>

				<Link to="/portfolio/projects">projects</Link>

				<Link to="/portfolio/about">about</Link>

				<Link to="/portfolio/contact">contact</Link>
			</StyledNav>
		</header>
	);
};

export default Header;
