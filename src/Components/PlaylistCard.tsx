import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

interface PlaylistItem {
  url: string;
  song_playlist_name: string;
  description: string;
  color: string;
}

interface PlaylistCardProps {
  playlistItem: PlaylistItem;
}
const smallScreenStyles = {
  width: "130px",
  borderRadius: "6px",
};

const largeScreenStyles = {
  width: "290px", // Adjust the width for large screens
  borderRadius: "6px",
};
const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlistItem }) => {
  return (
    <>
      <div className="p-3" style={{ marginBottom: "0px" }}>
        <div className="relative group">
          <Card
            sx={{
              minWidth: 150,
              minHeight: 150,
              height: 280,
              maxHeight: 280,
              maxWidth: 210,
              background: "#161616",
              border: "0px",
              transition: "background-color 0.3s ease",
              ":hover": { backgroundColor: "#2c2c2c" },
            }}
          >
            <img
              src={playlistItem.url}
              srcSet={playlistItem.url}
              style={
                window.innerWidth < 768 ? smallScreenStyles : largeScreenStyles
              }
              loading="lazy"
              alt={playlistItem.song_playlist_name}
            />
            <CardContent orientation="horizontal">
              <div className="text-white">
                <h5 className="font-bold">{playlistItem.song_playlist_name}</h5>
                <p style={{ fontSize: "11px", color: "#a7a7a7" }}>
                  {playlistItem.description}
                </p>
              </div>
            </CardContent>
            <div className="absolute   opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Button */}
              <div className="bg-green-500 text-white p-3  " style={{borderRadius:"50%",marginTop:"115px", marginLeft:"115px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  fill="currentColor"
                  style={{fill:"black"}}
                  className="bi bi-play-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PlaylistCard;
