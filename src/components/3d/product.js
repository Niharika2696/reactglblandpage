import React from 'react';
import Model from './model';
import { OrbitControls } from '@react-three/drei';
import CanvasContainer from './canvas-container';

/**
 * A trainers modal
 */
const Product = () => {
  return (
    <CanvasContainer height={600} width={1000} position={[0 ,190,-50]} fov={70}  rotation={[0,0, 0]}>
      <Model
        scenePath="city/scene.gltf"
        position={[200, 0, 190]}
        rotation={[0,0, 0]}
      />
      <OrbitControls minDistance={10} maxDistance={400} 
      maxPolarAngle={Math.PI/3}
      minPolarAngle={0}
      enablePan={false}/>
    </CanvasContainer>
  );
};

export default Product;
