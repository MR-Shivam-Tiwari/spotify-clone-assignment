import { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
interface PlaylistItem {
  url: string;
  song_playlist_name: string;
  description: string;
  color: string;
}

interface SearchListCollectionProps {
  searchQuery: string;
}
const SearchListCollection: React.FC<SearchListCollectionProps> = ({ searchQuery }) => {
  const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/SearchList.json');
        const data = await response.json();
        setPlaylists(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter playlists based on the search query
  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.song_playlist_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
       <div className='text-white  '>
      <div className='flex items-center justify-between '>
        <div className='font-bold px-3' style={{fontSize:"24px"}}>
          Browse all
        </div>
     
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
          {filteredPlaylists.map((playlist, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <SearchCard playlistItem={playlist} />
            </div>
          ))}
        </div>
      
    </div>
    </div>
  )
}

export default SearchListCollection
