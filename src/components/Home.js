
import "../css/home.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function Home() {


    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            <main>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: {
                            enable: true,
                            zIndex: -1,
                        },
                        fpsLimit: 120,
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
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 2,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1.5,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />

                <div id="name-pavas">
                    <h1>Pavas Garg</h1>
                </div>
                <div id="icons">
                    <a href="http://github.com" target="_blank"><i className="fa-brands fa-github fa-3x"></i></a>
                    <a href="http://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin fa-3x"></i></a>
                    <a href="http://twitter.com" target="_blank"><i className="fa-brands fa-twitter fa-3x"></i></a>
                    <a href="http://facebook.com" target="_blank"><i className="fa-brands fa-facebook fa-3x"></i></a>
                </div>
            </main>
        </>
    );
}
