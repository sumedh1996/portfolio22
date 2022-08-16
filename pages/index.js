import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <div>
      <Parallax pages={4} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />

<ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff8080" }}
        />

<ParallaxLayer
          offset={2}
          speed={2}
          style={{ backgroundColor: "#008080" }}
        />

<ParallaxLayer
          offset={3}
          speed={2}
          style={{ backgroundColor: "#ffaabb" }}
        />

        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
