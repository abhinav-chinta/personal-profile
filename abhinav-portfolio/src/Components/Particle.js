import React from "react";
import Particles from "react-particles-js";
import Params from "./particlesjs-config.json"
function Particle() {
  return (
    <Particles
      params={Params}/>
  );
}

export default Particle;