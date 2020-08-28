import React from "react";

function Card({ info }) {
	console.log("info: ", info);
	return (
		<>
			<div>{info}</div>
		</>
	);
}

export { Card };
