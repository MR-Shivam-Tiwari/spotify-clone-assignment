import { useEffect, useState } from "react";
import SearchListCollection from "./SearchListCollection";
import Footer from "../Footer";
import styled from "styled-components";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const smallScreenMaxHeight = 830;
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
  return (
    <div
      className="  m-2  "
      style={{ background: "#121212", borderRadius: "6px" }}
    >
      <div className="hidden lg:block">

      <div
        className="flex items-center justify-between "
        style={{
          backgroundColor: "#101010",
          padding: "12px",
          borderRadius: " 6px 6px 0px 0px",
        }}
      >
        <div className="flex items-center gap-3 ">
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
            <div className="relative">
              <input
                className="p-3 px-5 pl-10 text-white"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: "#242424",
                  width: "160%",
                  borderRadius: "50px",
                }}
                placeholder="What do you want to listen to?"
              />
              <div
                style={{
                  position: "absolute",
                  left: "12px", // Adjust the left position as needed
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  width="18px"
                  height="18px"
                  style={{ fill: "white" }}
                  className="Svg-sc-ytk21e-0 bneLcE search-icon"
                  viewBox="0 0 24 24"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                  </svg>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="flex gap-5">
            <div
              style={{
                cursor: "pointer",
                color: "#b3b3b3",
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

            {/* <div
              style={{
                background: "white",
                borderRadius: "50px",
                cursor: "pointer",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.1s ease-in-out",
              }}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <h4
                className={`text-black p-3 px-5 font-bold ${
                  isHovered ? "text-black" : ""
                }`}
              >
                Log in
              </h4>
            </div> */}
          </div>
        </div>
      </div>
      </div>

      <ScrollMinibarDiv>
        <div className="p-4 pl-0 lg:p-0 scroll-minibar " style={ScrollerStyle}>
          <SearchListCollection searchQuery={searchQuery} />
          <div className=" "></div>
          <div>
            <Footer />
          </div>
        </div>
      </ScrollMinibarDiv>
    </div>
  );
}

export default Search;
