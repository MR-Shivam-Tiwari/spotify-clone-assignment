import PlaylistCard from "./PlaylistCard";
const sleepplaylist = [
  {
    url: "https://i.scdn.co/image/ab67706f000000020cc53ba00f68e42eb9497f05",
    song_playlist_name: "Golden Ghazals",
    description: "Let these contemplative couplets take you away.",
    color: "red",
  },
  {
    url: "https://i.scdn.co/image/ab67706f00000002c9454db25ea4d91b5d641f0c",
    song_playlist_name: "Punjabi Ghazals",
    description:
      "Your favorite Punjabi Ghazals and Qawwalis. Cover: Jagjit Singh",
    color: "#385212",
  },
  {
    url: "https://i.scdn.co/image/ab67616d00001e02edcd8607943ad35f7a6e95f7",
    song_playlist_name: "Bollywood Ghazals",
    description: "Your favorite these contemplative couplets take you away.",
    color: "#385212",
  },
];
function Sleep() {
  return (
    <div>
      <div className="font-bold text-white pl-3" style={{ fontSize: "24px" }}>
        Ghazals
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
        {sleepplaylist.slice().map((playlistItem, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <PlaylistCard playlistItem={playlistItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sleep;
