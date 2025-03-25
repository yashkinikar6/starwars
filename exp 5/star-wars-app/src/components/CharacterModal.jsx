import React, { useState, useEffect } from 'react';
import { fetchResource } from '../services/api';
import { formatDate } from '../utils/dateFormatter';
import '../styles/CharacterModal.css';

function CharacterModal({ character, onClose }) {
  const [homeworld, setHomeworld] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHomeworld = async () => {
      try {
        const data = await fetchResource(character.homeworld);
        setHomeworld(data);
      } catch (err) {
        setError('Failed to fetch homeworld details.');
      }
    };
    getHomeworld();
  }, [character.homeworld]);

  const heightInMeters = (parseFloat(character.height) / 100).toFixed(2);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{character.name}</h2>
        <p><strong>Height:</strong> {heightInMeters} m</p>
        <p><strong>Mass:</strong> {character.mass} kg</p>
        <p>
          <strong>Date Added:</strong> {formatDate(character.created)}
        </p>
        <p><strong>Films Appeared In:</strong> {character.films.length}</p>
        <p><strong>Birth Year:</strong> {character.birth_year}</p>

        {error && <p>{error}</p>}
        {homeworld ? (
          <div className="homeworld-info">
            <h3>Homeworld: {homeworld.name}</h3>
            <p><strong>Terrain:</strong> {homeworld.terrain}</p>
            <p><strong>Climate:</strong> {homeworld.climate}</p>
            <p><strong>Number of Residents:</strong> {homeworld.residents.length}</p>
          </div>
        ) : (
          <p>Loading homeworld details...</p>
        )}
      </div>
    </div>
  );
}

export default CharacterModal;
