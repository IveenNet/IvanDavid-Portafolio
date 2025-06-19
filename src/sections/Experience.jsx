// Experience.jsx
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"

import CanvasLoader from "../components/CanvasLoader.jsx"
import Developer from "../components/Developer.jsx"
import { workExperiences } from "../constans"

function Experience() {
  const [animationName, setAnimationName] = useState("salute")

  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>

        <div className="work-container">
          {/* Canvas con el modelo */}
          <div className="work-canvas">
            <Canvas>
              <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                {/* Tu personaje con la animación que elijas */}
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          {/* Lista de experiencias, cambiando la animación al hacer hover/click */}
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {workExperiences.map(({ id, name, pos, duration, title, icon, animation }) => (
              <div
                key={id}
                onClick={() => {
                  console.log("Click anim:", animation?.toLowerCase())
                  setAnimationName(animation?.toLowerCase() || "salute")
                }}
                onPointerOver={() => {
                  console.log("Hover anim:", animation?.toLowerCase())
                  setAnimationName(animation?.toLowerCase() || "salute")
                }}
                onPointerOut={() => setAnimationName("salute")}
                className="work-content_container group"
              >
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img className="w-full h-full" src={icon} alt={name} />
                  </div>
                  <div className="work-content_bar" />
                </div>

                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">{name}</p>
                  <p className="text-sm mb-5">
                    {pos} -- <span>{duration}</span>
                  </p>
                  <p className="group-hover:text-white transition ease-in-out duration-500">
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
