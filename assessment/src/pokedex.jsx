import React, { useState } from 'react';
import pokemon from './pokemon.jsx'
import './pokedex.css'
import Card from './card.jsx';

/* 
This is the component for the pokedex page. 
Feel free to edit anything in this file except the name of the component.
*/


    const Pokedex = (props) => {
        const [selectedPokemon, setSelectedPokemon] = useState(null);

        const handleButtonClick = (pokemon) => {
            setSelectedPokemon(pokemon);
        };

        return (
            <div> 
                <div class="red-banner" id="redBanner">
                    <p>Pokédex</p>
                </div>
                <div class="black-banner" id="blackBanner"></div>
                <div class="flex-container">
                    {pokemon.map((pokemon) => (
                        <button
                            key={pokemon.id}
                            class="button"
                            onClick={() => handleButtonClick(pokemon)}>
                                {pokemon.name}
                        </button>
                    ))}
                </div>

                {selectedPokemon ? (
                    <Card
                        pokemonName={selectedPokemon.name}
                        pokemonHp={selectedPokemon.hp}
                        pokemonMoves={selectedPokemon.moves}
                        imageUrl={selectedPokemon.image_src}
                    />
                ) : (
                    <p class="select-text">Select a Pokémon!</p>
                )}
            </div>
        );
    }

export default Pokedex