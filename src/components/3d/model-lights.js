import React from 'react';

const ModelLights = () => (
  <>
    <directionalLight position={[50, 20, 50]} intensity={5} />
    <directionalLight position={[-50, -20, -50]} intensity={5} />
    <ambientLight intensity={0.9} />
  </>
);

export default ModelLights;
