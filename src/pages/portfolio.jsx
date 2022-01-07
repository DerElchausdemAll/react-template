import React from "react";
import Typography from "../exercises/components/typography";
import Button from "../exercises/components/Button";
import Header from "../exercises/components/header";
import Footer from "../exercises/components/footer";

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

const Portfolio = () => {
	return <Layout>Home</Layout>;
};

export default Portfolio;
