import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <color attach="background" args={['#ffffff']} />
      <OrbitControls />
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
}

export default App
