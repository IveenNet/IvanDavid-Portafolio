import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useRef } from "react"

// eslint-disable-next-line react/prop-types
const HeroCamera = ({ children, isMobile }) => {

  const groupRef = useRef()

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)

    if (!isMobile) easing.dampE(groupRef.current.rotation, [state.pointer.y / 3, -state.pointer.x / 5, 0], 0.25, delta)
  })

  return (
    <group ref={groupRef} scale={isMobile ? 0.9 : 1.2}>{children}</group>
  )
}

export default HeroCamera
