import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';
import { fetchCharacters } from '../services/api';

function CharacterList({ onCharacterClick }) {
  const [characters, setCharacters] = useState([]);
  const [pageUrl, setPageUrl] = useState('https://swapi.dev/api/people/');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ next: null, previous: null });

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCharacters(pageUrl);
        setCharacters(data.results);
        setPagination({ next: data.next, previous: data.previous });
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [pageUrl]);

  const handlePageChange = (url) => {
    if (url) setPageUrl(url);
  };

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            onClick={() => onCharacterClick(character)}
          />
        ))}
      </div>
      <Pagination
        next={pagination.next}
        previous={pagination.previous}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default CharacterList;
