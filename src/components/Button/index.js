import React from "react";
import { Icon } from "../Icon";
import { Container, ButtonText } from "./styles";

function Button({ children, icon }) {
	const icone = icon ? <Icon name={icon} /> : "";
	const element = (
		<>
			{icone}
			<ButtonText>{children}</ButtonText>
		</>
	);
	return <Container>{element}</Container>;
}
export { Button };
