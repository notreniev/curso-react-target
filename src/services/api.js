import axios from "axios";

const api = axios.create({
	baseURL: "https://pokeapi.co/api/v2",
});

async function getInitialPokemons() {
	try {
		const responsedata = await api.get("/pokemon?limit=3&offset=3");
		return {
			success: true,
			pokemons: [...responsedata.data.results],
		};
	} catch (error) {
		return { success: false, error };
	}
}

export { getInitialPokemons, api };
