import React from "react";
import styles from "./styles.module.css";

const typeVarients = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	subtitle1: "h2",
	subtitle2: "h3",
	body1: "p",
	body2: "span",
	button: "span",
	caption: "div",
	overline: "div",
};

const Typography = ({
	children,
	className, // sammelt className aus der anderen Index-Datei
	variant = "body1", // wenn kein Variant an <Typography> drangehängt wird, dann nimmt er body1
	component = typeVarients[variant] ?? "span", // wenn der Variant="name" nicht existiert, dann span
	...rest // der Rest sammelt hier das foo="Bar" ein und in Component gibt er es wieder aus!
}) => {
	const Component = component;
	return (
		<Component {...rest} className={[styles.Typography, styles[variant], className].join(" ")}>
			{children}
		</Component>
	);
};
// styles.Typography erstellt eine class styles_Typography, aber warum braucht man das?
export default Typography;

// Stand 06.01.2022 mit Dennis, Marc etc zusammengecoded

// import React from "react";
// import styles from "./styles.module.css";

// const typeVarients = {
// 	h1: "h1",
// 	h2: "h2",
// 	h3: "h3",
// 	body1: "p",
// };

// const Typography = ({ children, component, variant }) => {
// 	const Component = component;
// 	return <Component className={[styles.h1, styles[variant]].join(" ")}>{children}</Component>;
// };

// export default Typography;
