import { Card, CardContent } from "@mui/joy";
import React from "react";
interface PlaylistItem {
  url: string;
  song_playlist_name: string;
  description: string;
  color: string;
}

interface SearchCardProps {
  playlistItem: PlaylistItem;
}
const smallScreenStyles = {
  width: "70px",
  marginLeft: "80px",
  transform: "rotate(25deg)",
  marginBottom: "-22px",
};

const largeScreenStyles = {
  width: "100px", // Adjust the width for large screens
  marginLeft: "110px", // Adjust the left margin for large screens
  marginTop: "32px",
  marginBottom: "-22px",
  transform: "rotate(25deg)", // Adjust the angle as needed
};
const SearchCard: React.FC<SearchCardProps> = ({ playlistItem }) => {
  return (
    <div>
      <div className="px-3 mt-3 ">
        <Card
          sx={{
            minWidth: 150,
            minHeight: 150,
            height: 210,
            maxHeight: 210,
            maxWidth: 210,
            background: `${playlistItem.color}`,
            border: "0px",
            overflow: "hidden", // Hide content that overflows the card boundaries
          }}
        >
          <CardContent orientation="horizontal">
            <div className="text-white ">
              <h3
                className="font-bold"
                style={{ fontSize: "24px", marginTop: "-10px" }}
              >
                {playlistItem.song_playlist_name}
              </h3>
            </div>
          </CardContent>
          <img
            src={playlistItem.url}
            srcSet={playlistItem.url}
            style={
              window.innerWidth < 768 ? smallScreenStyles : largeScreenStyles
            }
            loading="lazy"
            alt={playlistItem.song_playlist_name}
          />
        </Card>
      </div>
    </div>
  );
};

export default SearchCard;
