import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <color attach="background" args={['#ffffff']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMaterial attach="material-0" color="red" />
        <meshBasicMaterial attach="material-1" color="green" />
        <meshBasicMaterial attach="material-2" color="blue" />
        <meshBasicMaterial attach="material-3" color="yellow" />
        <meshBasicMaterial attach="material-4" color="orange" />
        <meshBasicMaterial attach="material-5" color="purple" />
      </mesh>
    </Canvas>
  );
}

export default App
