import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  const parallax = useRef(null);
  return (
    <div className="" id="Base">
      <video
        loop
        muted
        autoPlay
        className="absolute h-auto w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://uploads-ssl.webflow.com/61341f0505224d4d93d0097f/61341f0505224da588d009a5_building%20bg-transcode.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
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
