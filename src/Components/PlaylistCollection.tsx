import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';

const PlaylistCollection: React.FC = () => {
  const [playlists, setPlaylists] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? playlists.length : 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/PlayList.json');
        const data = await response.json();
        setPlaylists(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-white  '>
      <div className='flex items-center justify-between '>
        <div className='font-bold pl-3' style={{fontSize:"24px"}}>
          Zzzzzz
        </div>
      {playlists.length > 4 && (
        <button
        className='pr-4'
          style={{
            color: '#b3b3b3',
            fontWeight: 'bold',
         
            fontSize:"13px"
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show less' : 'See all'}
        </button>
      )}
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2'  >
        {playlists.slice(0, itemsToShow).map((playlist, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <PlaylistCard playlistItem={playlist} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default PlaylistCollection;
