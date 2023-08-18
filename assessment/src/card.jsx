import React from 'react';
import PropTypes from 'prop-types';
import './card.css'

function Card({ pokemonName, pokemonHp, pokemonMoves, imageUrl }) {
  return (
    <div className="pokemon-card-container">
        <div className="pokemon-card">
            <div className="pokemon-header">
                <h2 className="pokemon-name">{pokemonName}</h2>
                <span className="pokemon-hp">HP: {pokemonHp}</span>
            </div>
            <div className="pokemon-image-container">
                <img className="pokemon-image" src={imageUrl} alt={pokemonName} />
            </div>
            <div className="pokemon-details">
                <div className="pokemon-moves">
                    <p><strong>Moves:</strong></p>
                    <ul>
                        {pokemonMoves.map((move, index) => (
                            <li key={index}>{move}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

Card.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonHp: PropTypes.string.isRequired,
  pokemonMoves: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card