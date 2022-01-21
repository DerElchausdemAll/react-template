import React from "react";
import styles from "./styles.module.css";
import styled from "styled-components";

const StyledButton = styled.button`
	width: 100px;
	height: 50px;
	border: rgb(8, 2, 2) solid 1px;
	border-radius: 20px;
	background: blue;
	&:hover {
		background: red;
	}
`;

const Button = ({ children, className, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

// vor bzw. ohne Styled-Components 10.01.2022

// import React from "react";
// import styles from "./styles.module.css";

// const Button = ({ children, className, ...props }) => {
// 	return (
// 		<button {...props} className={[styles.Button, className].join(" ")}>
// 			{children}
// 		</button>
// 	);
// };

// export default Button;
