import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesComponent = ({ value }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={value}
    />
  );
};

export default ParticlesComponent;
