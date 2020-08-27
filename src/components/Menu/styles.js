import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	justify-content: space-around;

	a:visited,
	a:link,
	a:active {
		background-color: orange;
		text-decoration: none;
		margin: 5px;
	}
	a:hover {
		background-color: green;
	}
`;
