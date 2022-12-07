import Pokedex from "../Pokedex/Pokedex";
import pokemons from "../../data";

export default function pokedexList() {
    return(
        <>
        {pokemons.map((pokemon, index) =>(
            <Pokedex key={index} {...pokemon} />
        ))}
        </>
    );
}