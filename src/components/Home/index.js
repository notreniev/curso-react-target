import React from "react";
import { getInitialPokemons, api } from "../../services/api";
import { Card } from "../Card";
import { Wrapper, PokeInfo } from "./styles";

function Home() {
	const [pokemons, setPokemons] = React.useState();
	const [loading, setLoading] = React.useState(true);

	const pokes = [
		{ number: "001", name: "Bulbassaur", types: ["grass", "poison"] },
		{ number: "004", name: "Charmander", types: ["fire"] },
		{ number: "007", name: "Squirtle", types: ["water"] },
	];

	React.useEffect(() => {
		async function getPokes() {
			const pokeData = await getInitialPokemons();

			if (pokeData.success) {
				const updatedPokemons = [];
				pokeData.pokemons.map(async (poke, index) => {
					console.log("poke", poke);
					const { data } = await api.get([poke.url]);
					const uniquePoke = {
						id: data.id,
						name: data.name,
						types: data.types,
						image: data.sprites.other["official-artwork"].front_default,
					};

					updatedPokemons.push(uniquePoke);

					if (index === 2) {
						setPokemons(updatedPokemons);
						setLoading(false);
					}
				});
			}
		}

		getPokes();
	}, []);

	console.log("pokemons", pokemons);

	if (loading) return <span style={{ color: "#fff" }}>Loading...</span>;

	return (
		<Wrapper>
			{pokemons.map((poke) => (
				<PokeInfo key={poke.name}>
					#{poke.id}
					<br />
					{poke.name}
					<br />
					{poke.types.map((type) => (
						<>
							<span key={type}>{type.type.name}</span> {""}
						</>
					))}
					<br />
					<div>
						<img
							src={poke.image}
							alt={`imagem de ${poke.name}`}
							width="130"
							height="130"
						/>
					</div>
				</PokeInfo>
			))}
		</Wrapper>
	);
}

export { Home };
