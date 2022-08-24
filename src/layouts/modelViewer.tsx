import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { colourThemes, defaultTheme } from "./colours";
import { getTheme, Logo } from "./utils";
import * as THREE from 'three'
import React, { Suspense } from "react";
import { Canvas } from 'react-three-fiber'
import { OrbitControls, useGLTF } from "@react-three/drei";


const getCSS: GetCSSFn = config => {
  const theme = getTheme(config);
  const colours = colourThemes[theme];

  return `
  .top {
    width: 100vw;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${colours.bg};
    color: ${colours.fg};
    padding: 80px;
  }

  .featurepic {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .featurecontainer {
    width: 100vw;
    height: 70vh;
  }

  .contentcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

    .logo {
      position: absolute;
      top: 60px;
      left: 60px;
    }

    h1 {
      margin-top: -10;
      text-align: right;
      font-size: 1.6em;
      font-weight: 800;
      max-width: 1700px;
    }

    .dicon-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 80px;
    }

    .dicon {
      width: 256px;
      height: 256px;
      border-radius: 2px;
    }

    .em {
      color: ${colours.accent_light};
    }

    .subtitle {
      margin-top: 48px;
      text-align: right;
      font-size: 80px;
      font-family: "JetBrains Mono", monospace;
      color: ${colours.accent_dark};
    }
    `;
};

const Component: LayoutComponent = ({ config }) => {
  const theme = getTheme(config);
  const subtitle = config.subtitle;
  const title = config.title;
  const featureURL = config.image;

  function Model(props) {
    const { scene } = useGLTF("https://modelviewer.dev/shared-assets/models/Astronaut.glb");
    return <primitive object={scene} />;
  }

  return (
    <div className="contentcontainer">
      <div className="featurecontainer">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
      </div>
      <div className="top">
        <Logo config={config} />

        <div className="content">
          <h1>{title}</h1>
        </div>
      </div>
    </div>

  );
};

export const modelViewer: ILayout = {
  name: "Model Viewer",
  properties: [
    {
      name: "Theme",
      type: "select",
      options: ["Light", "Dark", "Gray", "Brown", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Red"],
      default: defaultTheme,
    },
    {
      name: "title",
      type: "text",
      default: "",
      placeholder: "Title Text",
    },
    {
      name: "image",
      type: "text",
      default: "https://cdn.cloudflare.steamstatic.com/steam/apps/1663040/ss_dddb99b7d2bae8f8a14deb74f58f0895919bdb68.1920x1080.jpg?t=1633022423",
      placeholder: "URL Text",
    },
  ],
  getCSS,
  Component,
};
