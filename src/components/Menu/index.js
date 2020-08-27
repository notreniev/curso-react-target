import React from "react";
import { Button } from "../Button";
import { Container } from "./styles";
import { icons } from "../../utils/icons";
import { Link } from "react-router-dom";

function Menu({}) {
	const buttons = [
		{
			name: "Home",
			icon: icons.HOME,
			route: "/",
		},
		{
			name: "Gerações",
			route: "/geracoes",
		},
		{
			name: "Sobre",
			icon: icons.INFO,
			route: "/sobre",
		},
		{
			name: "Logout",
			icon: icons.LOGOUT,
			route: "/",
		},
	];
	return (
		<Container>
			{buttons.map((button) => (
				<Link key={button.name} to={button.route}>
					<Button key={button.name} icon={button.icon}>
						{button.name}
					</Button>
				</Link>
			))}
		</Container>
	);
}

export { Menu };
