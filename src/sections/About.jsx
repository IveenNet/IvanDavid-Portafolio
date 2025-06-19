import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { citiesLabel, citiesVisited } from '../constans';

const About = () => {

  const [hasCopied, setHasCopied] = useState(false);

  const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;



  // Convertir las ciudades a un array compatible con el Globe
  const gData = Object.entries(citiesVisited).map(([name, { lat, lng, color }]) => ({
    lat,
    lng,
    size: 15, // Tamaño uniforme para destacar las ciudades
    color,
    name,
  }));

  const handleCopy = () => {
    navigator.clipboard.writeText(' iveen98@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Ivan David Medina</p>
              <p className="grid-subtext">
                With 5 years of experience, I mainly work with .NET and SQL.
                After some time, I reinvented myself and am now improving my
                frontend and AI skills on my own.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2-2.PNG"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={citiesLabel}
                htmlElementsData={gData}
                htmlElement={(d) => {
                  const el = document.createElement('div');
                  el.innerHTML = markerSvg;
                  el.style.color = d.color;
                  el.style.width = `${d.size}px`;

                  el.style['pointer-events'] = 'auto';
                  el.style.cursor = 'pointer';
                  el.onclick = () => console.info(d);
                  return el;
                }}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Madrid, Spain and open to remote work
                worldwide.
              </p>
              <div
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      document.getElementById('name')?.focus();
                    }, 600);
                  }
                }}
              >
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">iveen98@gamil.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
