import { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
const playlist: PlaylistItem[] = [
  {
    "url": "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa",
    "song_playlist_name": "Podcasts",
    "description": "Podcast playlists for your enjoyment",
    "color": "#006450"
  },
  {
    "url": "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
    "song_playlist_name": "Live Events",
    "color": "#8400e7",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
    "song_playlist_name": "Made For You",
    "color": "#1e3264",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
    "song_playlist_name": "New Releases",
    "color": "#e8115b",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005caff5976b97bcf10d98acbae2cd",
    "song_playlist_name": "Hindi",
    "color": "#dc148c",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67706f00000002461fda205f5f952eff8bae70",
    "song_playlist_name": "Punjabi",
    "color": "#b02897",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005caf4b3beede484da74b233fa299",
    "song_playlist_name": "Tamil",
    "color": "#a56752",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005caf666a4ae3e6161da7a120ca14",
    "song_playlist_name": "Ghazals",
    "color": "#777777",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",
    "song_playlist_name": "Podcast Charts",
    "color": "#0d73ec",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://t.scdn.co/images/209c867f5bb34076b0dcc9deeb1868e6",
    "song_playlist_name": "Podcast New Releases",
    "color": "#8e66ac",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/9af79fd06e34dea3cd27c4e1cd6ec7343ce20af4",
    "song_playlist_name": "Video Podcasts",
    "color": "#e13300",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/e227cd9674618024276c65f1213fb05af34cf512",
    "song_playlist_name": "Business & Technology",
    "color": "#777777","description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
    "song_playlist_name": "Charts",
    "color": "#8d67ab","description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005cafbca4d84993408c24bec78de8",
    "song_playlist_name": "Telgu",
    "color": "#1e3264",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
    "song_playlist_name": "Pop",
    "color": "#148a08",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa",
    "song_playlist_name": "Indie",
    "color": "#e91429",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005cafb03c6f8e7efca2ae36f41b31",
    "song_playlist_name": "Love",
    "color": "#e61e32",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
    "song_playlist_name": "Discover",
    "color": "#8d67ab","description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd",
    "song_playlist_name": "Trending",
    "color": "#b02897",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354",
    "song_playlist_name": "Mood",
    "color": "#e1118c",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c",
    "song_playlist_name": "Party",
    "color": "#537aa1",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://t.scdn.co/images/ad3e3f8f80eb494d998a435f7a5ae8c7",
    "song_playlist_name": "Devotional",
    "color": "#c39687",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005caff005a355830c374754d32868",
    "song_playlist_name": "Decades",
    "color": "#ba5d07",
    "description": "Podcast playlists for your enjoyment",
  },
 
  {
    "url": "https://i.scdn.co/image/ab67fb8200005caf9e3dea60be755ccd97b7351f",
    "song_playlist_name": "Hip-Hop",
    "color": "#503750",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196",
    "song_playlist_name": "Dance/Electronic",
    "color": "#d84000",
    "description": "Podcast playlists for your enjoyment",
  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005cafdad1281e13697e8d8cf8f347",
    "song_playlist_name": "Student",
    "color": "#af2896",
    "description": "Podcast playlists for your enjoyment",

  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170",
    "song_playlist_name": "Chill",
    "color": "#d84000",
    "description": "Podcast playlists for your enjoyment",

  },
  {
    "url": "https://i.scdn.co/image/ab67fb8200005caf26dd3719e8824756914ae61f",
    "song_playlist_name": "Gaming",
    "color": "#e8115b",
    "description": "Podcast playlists for your enjoyment",

  }
 
]
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
    // Use the predefined playlist array directly instead of fetching
    setPlaylists(playlist);
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
