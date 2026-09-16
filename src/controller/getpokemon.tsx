import { Pokemon } from "../models/pokemon.m";

/*Llamada API Rest*/
export async function getPokemons(): Promise<Pokemon[]>{
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
    const datos = await response.json();
    const pokemons: Pokemon[] = datos.results.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imggif: pokemon.sprites.animated,
        imglarge: pokemon.sprites.large,
        imgnormal: pokemon.sprites.normal,
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
        tipo: pokemon.type.join(", ")
    }));
    return pokemons;

} 