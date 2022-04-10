import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DavidModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/David_Dice.glb");
  console.log('materials', materials);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/David_Dice.glb");