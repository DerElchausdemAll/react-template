import React from "react";
import Header from "../header";
import Footer from "../footer";
import Counter from "../Counter";
// import { Link } from "react-router-dom";

// StyledLink = styled(Link)`sdasda`;

const Layout = ({ children }) => {
	return (
		<div style={{ background: "white", color: "black", height: "100vh" }}>
			<Header />
			<div>{children}</div>
			<Counter style={{ display: "flex", justifyContent: "center" }}></Counter>
			<Footer
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				{children}
			</Footer>
		</div>
	);
};

export default Layout;
