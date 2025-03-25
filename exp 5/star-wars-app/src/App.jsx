import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterModal from './components/CharacterModal';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character) => setSelectedCharacter(character);
  const closeModal = () => setSelectedCharacter(null);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      <CharacterList onCharacterClick={openModal} />
      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
