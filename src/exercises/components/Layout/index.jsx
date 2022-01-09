import React from "react";
import Header from "../header";
import Footer from "../footer";
import Counter from "../Counter";

const Layout = ({ children }) => {
	return (
		<div style={{ background: "white", color: "black", height: "100vh" }}>
			<Header />
			<div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
			<Counter style={{ display: "flex", justifyContent: "center" }}></Counter>
			<Footer
				style={{
					display: "flex",
					justifyContent: "center",
					alignContent: "flex-end",
				}}
			>
				{children}
			</Footer>
		</div>
	);
};

export default Layout;
