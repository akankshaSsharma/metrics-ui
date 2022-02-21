import React from 'react'
import './styles.css'
import 'bulma'
import Particles from "react-tsparticles"


const Headbar = () => {
    const particlesInit = (main) => {
      console.log(main);
  
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    return (
        <div className="headbar" id="headbar">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                        color: {
                            value: "#FFFFFF",
                        },
                        },
                        fpsLimit: 60,
                        interactivity: {
                        events: {
                            onClick: {
                            enable: true,
                            mode: "push",
                            },
                            onHover: {
                            enable: true,
                            mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                            },
                            push: {
                            quantity: 4,
                            },
                            repulse: {
                            distance: 200,
                            duration: 0.4,
                            },
                        },
                        },
                        particles: {
                        color: {
                            value: "#008080",
                            opacity: 1.8,
                        },
                        links: {
                            color: "#D3D3D3",
                            distance: 150,
                            enable: true,
                            opacity: 1.9,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 1.9,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 3,
                        },
                        },
                        detectRetina: true,
                    }}
              />
        </div>
    )
}

export default Headbar