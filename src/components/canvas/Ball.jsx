import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

// Convert any image URL (including SVG) to a PNG data URL via an offscreen canvas
function useSafeTexture(imgUrl) {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const isSvg = imgUrl && imgUrl.toLowerCase().endsWith(".svg");
    if (!isSvg) {
      // For PNGs/JPGs load normally via THREE
      const loader = new THREE.TextureLoader();
      loader.load(imgUrl, (tex) => {
        setTexture(tex);
      });
      return;
    }

    // For SVGs: draw to an offscreen canvas and convert to texture
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const size = 256;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      // White background so the black SVG strokes are visible on the ball
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      const tex = new THREE.CanvasTexture(canvas);
      setTexture(tex);
    };
    img.src = imgUrl;
  }, [imgUrl]);

  return texture;
}

const Ball = ({ imgUrl }) => {
  const texture = useSafeTexture(imgUrl);

  if (!texture) return null;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={texture}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, antialias: false, powerPreference: "low-power" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
