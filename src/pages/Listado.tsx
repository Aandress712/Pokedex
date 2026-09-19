import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";

import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";
import './Css/cssProyectos.css';


const Listado=() => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const obtenerPokemons = async () => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        };
        obtenerPokemons();
    });

    return (
        <>

          <div className="content-wrapper">
            
            <div className="content">
                <div className="row gap-3">
                  
                  <h1 className="text-center" ><b>Pokémon AnderCode</b></h1>

                  {pokemons?.slice(0, 150).map((pokemon) => (

                     <Card className="mx-auto">
                     <Card.Header className="text-center tipoCard"><b>{pokemon.tipo}</b></Card.Header>
                     <div className="Imagen">
                        {/* Imagen normal (visible por defecto) */}
                        <img 
                          src={pokemon.imgnormal} 
                          className="imagenPrincipal" 
                          alt={pokemon.name} 
                        />
                        {/* Imagen secundaria / shiny (oculta por defecto) */}
                        <img 
                          src={pokemon.imggif} // 👈 Asegúrate de usar la propiedad correcta de tu objeto pokemon
                          className="imagenSecundaria" 
                          alt={`${pokemon.name} shiny`} 
                        />
                      </div>
                     <Card.Body className="cuerpoCarta">
                        <Card.Title className="text-center">{pokemon.name}</Card.Title>
                        <Card.Text>
                           {pokemon.name} no tiene descripción.
                        </Card.Text>
                        <ListGroup className="list-group-flush stats-list">
                           <ListGroup.Item><b>Número Pokemon:</b> {pokemon.id}</ListGroup.Item>
                           <ListGroup.Item>HP: {pokemon.hp}</ListGroup.Item>
                           <ListGroup.Item>Ataque: {pokemon.attack}</ListGroup.Item>
                           <ListGroup.Item>Defensa: {pokemon.defense}</ListGroup.Item>
                           <ListGroup.Item>Ataque Especial: {pokemon.sp_atk}</ListGroup.Item>
                           <ListGroup.Item>Defensa Especial: {pokemon.sp_def}</ListGroup.Item>
                           <ListGroup.Item>Velocidad: {pokemon.speed}</ListGroup.Item>
                        </ListGroup>
                        {/* comentario <button>Ver más</button> */}
                     </Card.Body>
                  </Card>
               ))}




                 
{/* Esto es un ejemplo sin llamado a la API, para mostrar como se vería un Pokémon en la lista.
                    <Card className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Header className="text-center">Pokémon Agua</Card.Header>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" />
                    <Card.Body>
                     <Card.Title className="text-center">Squirtle</Card.Title>
                     <Card.Text>
                         Squirtle es un Pokémon de tipo agua introducido en la primera generación. Es conocido por su apariencia de pequeño tortuga con un caparazón azul.
                     </Card.Text>
                     <ListGroup className="list-group-flush">
                        <ListGroup.Item>HP: 44</ListGroup.Item>
                        <ListGroup.Item>Ataque: 48</ListGroup.Item>
                        <ListGroup.Item>Defensa: 65</ListGroup.Item>
                        <ListGroup.Item>Ataque Especial: 50</ListGroup.Item>
                        <ListGroup.Item>Defensa Especial: 64</ListGroup.Item>
                        <ListGroup.Item>Velocidad: 43</ListGroup.Item>
                     </ListGroup>
                     comentario <button>Ver más</button>
                   </Card.Body>
                 </Card>
         
                    <Card className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Header className="text-center">Pokémon Fuego</Card.Header>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" />
                    <Card.Body>
                        <Card.Title className="text-center">Charizard</Card.Title>
                        <Card.Text className="text-center">
                         Charizard es un Pokémon de tipo fuego/volador introducido en la primera generación. Es conocido por su apariencia de dragón con alas y su capacidad para lanzar fuego.
                        </Card.Text>
                     <ListGroup className="list-group-flush">
                        <ListGroup.Item>HP: 78</ListGroup.Item>
                        <ListGroup.Item>Ataque: 84</ListGroup.Item>
                        <ListGroup.Item>Defensa: 78</ListGroup.Item>
                        <ListGroup.Item>Ataque Especial: 109</ListGroup.Item>
                        <ListGroup.Item>Defensa Especial: 85</ListGroup.Item>
                        <ListGroup.Item>Velocidad: 100</ListGroup.Item>
                     </ListGroup>
                     </Card.Body>
                 </Card>
*/}
                    </div>
                </div>
          </div>
    </>
    )
}

export default Listado;