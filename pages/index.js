import React, { useRef, useCallback, useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  const parallax = useRef(null);
  const [showNavBar, setShowNavBar] = useState(true);
  const handleScroll = (e) => {
    if (parallax.current.current > 100) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  };
  console.log("Hello");
  useEffect(() => {
    const paralaax = document.getElementById("parallax");
    paralaax.addEventListener("scroll", (e) => handleScroll(e));
    return () => paralaax.removeEventListener("scroll", (e) => handleScroll(e));
  });
  return (
    <div className="h-full" id="Base">
      <video
        loop
        muted
        autoPlay
        className="absolute h-full w-full object-cover"
      >
        <source
          src="https://uploads-ssl.webflow.com/61341f0505224d4d93d0097f/61341f0505224da588d009a5_building%20bg-transcode.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className={`${
          showNavBar
            ? "flex justify-between absolute top-0 w-full h-10 ease-in duration-700   bg-red-400"
            : " -translate-y-20 ease-out duration-700 fade-out"
        }`}
      >
        <p>Hello Portfolio</p>
        <p>Hello Works</p>
      </div>
      <div className="text-red-400 z-2 absolute bottom-2">
        <p> Your browser does not support the video tag.</p>
      </div>
      {/* <div className="flex justify-between absolute top-0 w-full h-10 bg-red-400">
          <p>Hello Portfolio</p>
          <p>Hello Works</p>
        </div> */}
      {/* <div className="text-red-400 z-2 absolute bottom-2">
        <p> Your browser does not support the video tag.</p>
      </div> */}
      <Parallax
        id="parallax"
        ref={parallax}
        pages={3}
        className=" relative top-0"
      >
        <ParallaxLayer
          id="parallax1"
          offset={0}
          speed={0}
          className="h-full opacity-40"
        ></ParallaxLayer>
        <ParallaxLayer
          id="parallax2"
          offset={1}
          speed={0}
          style={{ backgroundColor: "#0000ff" }}
        >
          <h1>This is Layer 2</h1>
        </ParallaxLayer>
        <ParallaxLayer
          id="parallax3"
          offset={2}
          speed={0}
          style={{ backgroundColor: "#ff0000" }}
        >
          <h1>This is Layer 3</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
