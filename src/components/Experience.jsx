import { Avatar } from "./Avatar";
import { OrbitControls } from "@react-three/drei";  

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls />
            <Avatar />
        </>
    )
}