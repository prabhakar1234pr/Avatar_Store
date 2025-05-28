import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export const Asset = ({ URL, skeleton }) => {
    const { nodes } = useGLTF(URL);

    // Find all SkinnedMesh nodes
    const skinnedMeshes = useMemo(() => {
        return Object.values(nodes).filter(
            (node) => node.isSkinnedMesh
        );
    }, [nodes]);

    return (
        <>
            {skinnedMeshes.map((mesh, i) => {
                if (!mesh.geometry || !mesh.material || !skeleton) {
                    console.warn('Skipping mesh due to missing geometry/material/skeleton', mesh, skeleton);
                    return null;
                }
                return (
                    <skinnedMesh 
                        key={i} 
                        geometry={mesh.geometry} 
                        material={mesh.material} 
                        skeleton={skeleton}
                        morphTargetDictionary={mesh.morphTargetDictionary} 
                        morphTargetInfluences={mesh.morphTargetInfluences} 
                        castShadow 
                        receiveShadow 
                        position={[0, 0, 0]}
                        scale={[1, 1, 1]}
                    />
                );
            })}
        </>
    );
};



