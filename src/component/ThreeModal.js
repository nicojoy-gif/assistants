import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const ThreeModel = () => {
  const modelContainerRef = useRef();

  useFrame(() => {
    // Add your animation or other updates here
  });

  return (
    <div className="modelContainer">
      <div id="container" ref={modelContainerRef}></div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model modelContainerRef={modelContainerRef} />
      </Canvas>
    </div>
  );
};

const Model = ({ modelContainerRef }) => {
  const loader = new GLTFLoader();

  loader.load(
    'assets/scene.gltf',
    (gltf) => {
      modelContainerRef.current.appendChild(gltf.scene);
    },
    undefined,
    (error) => {
      console.error(error);
    }
  );

  return null;
};

export default ThreeModel;
