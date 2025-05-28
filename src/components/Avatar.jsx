import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

import { Asset } from "./asset";
import { useConfiguratorStore } from "../store";
import { pb } from "../store";

export const Avatar = ({
  ...props
}) => {
    const group = useRef()
    const { nodes} = useGLTF('/models/Armature.glb')
    const customization = useConfiguratorStore((state) => state.customization );
    
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
          <primitive object={nodes.mixamorigHips} />
            {Object.keys(customization).map((key) => 
              customization[key]?.asset?.url && (
                <Suspense key={customization[key].asset.id}>
                  <Asset 
                    URL={pb.files.getURL(
                      customization[key].asset,
                      customization[key].asset.url
                    )} 
                    skeleton={nodes.Plane.skeleton} 
                  />
                </Suspense>
              )
            )}
          </group>
        </group>
      </group>
    )
  }