import { OrbitControls } from '@nicetouch/drei';
import { Canvas } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';

const Cube = () => {
  const outerCubeRef = useRef();
  const innerCubeRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (outerCubeRef.current && innerCubeRef.current) {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        const targetRotationX = y * 6;
        const targetRotationY = x * 6;
  
        // Smoothly interpolate current rotation towards target rotation
        outerCubeRef.current.rotation.x += (targetRotationX - outerCubeRef.current.rotation.x) * 0.1;
        outerCubeRef.current.rotation.y += (targetRotationY - outerCubeRef.current.rotation.y) * 0.1;
        innerCubeRef.current.rotation.x += (targetRotationX - innerCubeRef.current.rotation.x) * 0.1;
        innerCubeRef.current.rotation.y += (targetRotationY - innerCubeRef.current.rotation.y) * 0.1;
      }
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='h-[45vh] w-[45vw] pl-60 pt-9'>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={false}  />
        {/* Outer cube */}
        <mesh ref={outerCubeRef}>
          <boxGeometry args={[2.6, 2.6,2.6]} />
          <meshBasicMaterial color={'green'} transparent opacity={0.5} />
        </mesh>
        {/* Inner cube */}
        <mesh ref={innerCubeRef}>
          <boxGeometry args={[1.3, 1.3, 1.3]} />
          <meshBasicMaterial color={'black'} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Cube;
