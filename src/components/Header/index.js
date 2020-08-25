import React from "react";
import { Icon } from "../Icon";
import { Container, ContainerTitle, Title, Subtitle } from "./styles";

function Header() {
  return (
    <>
      <Container>
        <ContainerTitle>
          <Title>Pokedex</Title>
          <Subtitle>Procure por pokémons pelo nome ou região</Subtitle>
        </ContainerTitle>
        <Search />
        <Icon name="coffee" />
      </Container>
    </>
  );
}

function Search() {
  const [pokemonName, setPokemonName] = React.useState("");
  return (
    <div>
      <input
        placeholder="Nome do pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
    </div>
  );
}

export { Header };
