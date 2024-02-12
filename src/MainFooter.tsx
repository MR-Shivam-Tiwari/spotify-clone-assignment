import { useState } from "react";

function MainFooter() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <footer
      className="  left-0 right-0 text-white p-3 m-2 text-center "
      style={{
        background: `linear-gradient(to right, ${"#af2997"}, ${"#509bf5"})`,
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "0px" }}
      >
        <div className="text-start">
          <h6 className="font-bold" style={{ fontSize: "15px" }}>
            Preview of Spotify
          </h6>
          <p className="" style={{fontWeight:"500"}}>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <div>
          <div
            style={{
              background: "white",
              borderRadius: "50px",
              cursor: "pointer",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.1s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h4
              className={`text-black p-3 px-5 font-bold ${
                isHovered ? "text-black" : ""
              }`}
            >
              Sign up free
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
