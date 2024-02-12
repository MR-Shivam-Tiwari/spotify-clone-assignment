import React, { useState} from 'react';
import PlaylistCard from './PlaylistCard';
const playlists = [
  {
    "url": "https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de",
    "song_playlist_name": "Dinner With Friend",
    "description": "The perfect soundtrack to those long nights over dinner",
    "color": "red"
  },
  {
    "url": "https://i.scdn.co/image/ab67706f000000029b14583a15b3047fee20d36b",
    "song_playlist_name": "Latin Dinner",
    "description": "You bring the ingredients, we bring the flavor. Enjoy la ",
    "color": "#385212"
  },
  {
    "url": "https://i.scdn.co/image/ab67706f000000024b04e77913de1fc2a4b819df",
    "song_playlist_name": "Beer & Wings",
    "description": "Cold beer. Hot wings.we bring Great rock.",
    "color": "#336a85 "
  },
  {
    "url": "https://i.scdn.co/image/ab67706f000000027cd703bbfec2f1e86c879bec",
    "song_playlist_name": "Dinner Lounge",
    "description": "Soft electronic music for your dinner.    ",
    "color": "#336a85 "
  },
  {
    "url": "https://i.scdn.co/image/ab67706f000000022ba865eb4204be02ce3e8e09",
    "song_playlist_name": "Feel Good Dinner",
    "description": "An uplifting yet tasteful dinner playlist with a  feel good vibe.",
    "color": "#336a85 "
  },

  {
    "url": "https://i.scdn.co/image/ab67706f00000002dd9acb211caf8703ea9bfc98",
    "song_playlist_name": "Bossa Nova Dinner",
    "description": "Soundtrack your cozy dinner with bossa nova jazz.",
    "color": "#336a85 "
  },
  {
    "url": "https://i.scdn.co/image/ab67706f000000028dc9fe0c14e5f34ad165e3c2",
    "song_playlist_name": "Kitchen Swagger",
    "description": "Gettin' figgy with it, bana-na-na-nanana    ",
    "color": "#336a85 "
  },
  {
    "url": "https://i.scdn.co/image/ab67706f000000024b69d5ba7d5a9940475c3ef2",
    "song_playlist_name": "Soulful Dinner",
    "description": "Classic and new soul music for the perfect dinner. ",
    "color": "#336a85 "
  },
  {
    "url": "https://i.scdn.co/image/ab67706f0000000287b494983f83013197bdb4eb",
    "song_playlist_name": "Dinner & Chill",
    "description": "Gentle Indie songs for a relaxed dinner.",
    "color": "#336a85 "
  }
]
const PlaylistCollection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? playlists.length : 4;



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
