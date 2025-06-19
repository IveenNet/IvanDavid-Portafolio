// Developer.jsx
import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useGraph } from "@react-three/fiber"
import { useEffect, useMemo, useRef } from "react"
import { SkeletonUtils } from "three-stdlib"

const Developer = ({ animationName = "salute", ...props }) => {
  const group = useRef()
  // Carga el GLB (avatar) que ya esté riggeado con Mixamo
  const { scene } = useGLTF("/models/human/developer2.glb")

  // Clonar la escena para permitir animaciones independientes
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])

  // Extraer nodos y materiales
  const { nodes, materials } = useGraph(clone)

  // Cargar las animaciones FBX (todas deben ser del mismo rig Mixamo)
  const { animations: sleepIdleAnimation } = useFBX("/models/animations/sleepidle.fbx")
  const { animations: saluteAnimation } = useFBX("/models/animations/salute.fbx")
  const { animations: dancingAnimation } = useFBX("/models/animations/dancing.fbx")
  const { animations: typingAnimation } = useFBX("/models/animations/typing.fbx")

  console.log("Animaciones extraídas de FBX:", {
    sleepIdleAnimation,
    saluteAnimation,
    dancingAnimation,
    typingAnimation,
  })

  // Combinar todas las animaciones y renombrarlas a tus keys
  const animations = useMemo(() => {
    return [
      ...(sleepIdleAnimation || []).map(anim => ((anim.name = "sleepidle"), anim)),
      ...(saluteAnimation || []).map(anim => ((anim.name = "salute"), anim)),
      ...(dancingAnimation || []).map(anim => ((anim.name = "dancing"), anim)),
      ...(typingAnimation || []).map(anim => ((anim.name = "typing"), anim)),
    ]
  }, [sleepIdleAnimation, saluteAnimation, dancingAnimation, typingAnimation])

  console.log("Animaciones a pasar a useAnimations:", animations)

  // Vincular las animaciones a la referencia del grupo
  // NOTA: Usa "group" directamente, sin el condicional "group.current ? group : null"
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log("Estado del grupo:", group.current)
    console.log("Animaciones disponibles:", animations)
    console.log("Acciones en useEffect:", actions)

    // Si no existe la animación pedida, salimos
    if (!actions || !actions[animationName]) return

    console.log(`Intentando reproducir: ${animationName}`)
    actions[animationName].reset().fadeIn(0.5).play()

    // Limpieza al desmontar o cambiar animación
    return () => actions[animationName]?.fadeOut(0.5)
  }, [animationName, actions])

  return (
    <group ref={group} {...props} dispose={null}>
      {/* En muchos casos conviene renderizar el "clone" entero con:
          <primitive object={clone} />
         Para que la jerarquía de huesos se mantenga intacta.
         Pero si tu exportación con gltfjsx quedó así, al menos asegúrate de
         incluir todos los skinnedMesh y la primitive con los hips. */}

      <primitive object={nodes.Hips} />

      <skinnedMesh
        name="Wolf3D_Avatar"
        geometry={nodes.Wolf3D_Avatar.geometry}
        material={materials.Wolf3D_Avatar}
        skeleton={nodes.Wolf3D_Avatar.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Avatar_Transparent.geometry}
        material={materials.Wolf3D_Avatar_Transparent}
        skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton}
      />
    </group>
  )
}

useGLTF.preload("/models/human/developer2.glb")
export default Developer
