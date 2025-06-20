import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button';
import CanvasLoader from '../components/CanvasLoader';
import Cube from '../components/Cube';
import HackerRoom from '../components/HackerRoom';
import HeroCamera from '../components/HeroCamera';
import ReactLogo from '../components/ReactLogo';
import Rings from '../components/Rings';
import Target from '../components/Target';
import { calculateSizes } from '../constans/index';

function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 540 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1369 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Ivan David <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient text-center">
          Building Product & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 22]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href="#about" className="w-fit">
          <Button name="Let´s work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>

      </div>

    </section>
  );
}

export default Hero;
