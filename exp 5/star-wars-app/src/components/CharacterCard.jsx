import React from 'react';
import '../styles/CharacterCard.css';

function CharacterCard({ character, onClick }) {
  // Map species to background colors (for demo purposes)
  const speciesColor = {
    Human: '#AEDFF7',
    Droid: '#F7E8AE',
    default: '#D3D3D3',
  };

  // In SWAPI, species is a URL array. For demo, we assume data might be missing.
  const bgColor = speciesColor[character.species?.[0]] || speciesColor.default;
  const randomImage = `https://picsum.photos/seed/${character.name}/200/200`;

  return (
    <div className="character-card" style={{ backgroundColor: bgColor }} onClick={onClick}>
      <img src={randomImage} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
}

export default CharacterCard;
