import PlaylistCollection from "./PlaylistCollection";
import Sleep from "./Sleep";
import Footer from "./Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";

function Home() {

  const smallScreenMaxHeight = 850;
  const largeScreenMaxHeight = 430;

  // State to keep track of screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the max height based on screen width
  const maxHeight =
    screenWidth < 600 ? smallScreenMaxHeight : largeScreenMaxHeight;

  // Apply styles based on screen size
  const ScrollerStyle: React.CSSProperties = {
    maxHeight: `${maxHeight}px`,
    width: "100%",
    overflowY: "scroll",
    justifyContent: "flex-end",
    // marginTop: "140px",
  };

  const ScrollMinibarDiv = styled.div`
    .scroll-minibar::-webkit-scrollbar {
      width: 12px;
      background-color: #121212;
      color: #5a5a5a;
    }

    .scroll-minibar::-webkit-scrollbar-thumb {
      background-color: rgb(185, 182, 182) !important;
    }
  `;
  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  return (
    <div
      className="  m-2  "
      style={{ background: "#121212", borderRadius: "6px" }}
    >
      <div className="hidden lg:block">

      <div
        className="flex items-center justify-between"
        style={{
          backgroundColor: "#101010",
          padding: "12px",
          borderRadius: " 6px 6px 0px 0px",
        }}
      >
        <div className="flex items-center gap-3 ">
          <div
            className="p-2 "
            style={{ backgroundColor: "#050505", borderRadius: "50px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              style={{ fill: "white" }}
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </div>
          <div
            className="p-2"
            style={{ backgroundColor: "#050505", borderRadius: "50px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              style={{ fill: "white" }}
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>
        <div>
          {" "}
          <div className="flex gap-5">
            <div
              style={{
                cursor: "pointer",
                color:"#b3b3b3",
                transition: "background-color 0.3s ease, transform 0.3s ease", // Optional: Add a smooth transition effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#b3b3b3";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <h4 className={`p-3 px-5 font-bold`}>Sign up</h4>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "transform 0.1s ease-in-out", // Optional: Add a smooth transition effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#b3b3b3";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <h4 className={`p-3 px-5 text-black font-bold`}>Log in</h4>
            </div>
          </div>
        </div>
      </div>
      </div>
      <ScrollMinibarDiv>

      <div className="p-4 pl-0 lg:p-0 scroll-minibar  " style={ScrollerStyle}>
        <PlaylistCollection />
        <div className=" ">
          <Sleep />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      </ScrollMinibarDiv>

    </div>
  );
}

export default Home;
