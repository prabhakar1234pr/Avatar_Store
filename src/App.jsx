import { Canvas } from '@react-three/fiber';

import { UI } from './components/UI.jsx';
import { Experience } from './components/Experience.jsx';
function App() {
  return (
    <div className="app-container">
      {/* Top UI: logo and download button only */}
      <UI position="top" />
      <Canvas 
      camera={{ position: [0, 1, 2], fov: 50 }}>
        <color attach="background" args={['#333333']} />
        <Experience />
      </Canvas>
      {/* Bottom UI: category and asset buttons only */}
      <UI position="bottom" />
    </div>
  );
}

export default App;
