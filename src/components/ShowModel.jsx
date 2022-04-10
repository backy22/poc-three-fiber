import React, { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

import DavidModel from "./David"
// import DonutModel from './Donut48';

// function Model() {
//   const { scene } = useGLTF("David_Dice.glb")
//   return <primitive object={scene} />;
// }

function ShowModel(props) {

  return (
    <div style = {{height: "100vh", backgroundColor: "#fde2e4"}}>
      <Canvas camera={{position: [10, 0, 500], fov: 0.5 }}>
        <pointLight position={[10, 10, 500]} intensity={1.3} />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <DavidModel position={[0, 0, 0]}/>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ShowModel;