
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
                    // options={{
                    //     fullScreen: {
                    //         enable: true,
                    //         zIndex: -1,
                    //     },
                    //     fpsLimit: 120,
                    //     interactivity: {
                    //         events: {
                    //             onClick: {
                    //                 enable: true,
                    //                 mode: "push",
                    //             },
                    //             onHover: {
                    //                 enable: true,
                    //                 mode: "repulse",
                    //             },
                    //             resize: true,
                    //         },
                    //         modes: {
                    //             grab: {
                    //                 "distance": 300,
                    //                 "line_linked": {
                    //                     "opacity": 1
                    //                 }
                    //             },
                    //             bubble: {
                    //                 "distance": 200,
                    //                 "size": 40,
                    //                 "duration": 2,
                    //                 "opacity": 8,
                    //                 "speed": 3
                    //             },
                    //             repulse: {
                    //                 "distance": 200,
                    //                 duration: 0.4,
                    //             },
                    //             push: {
                    //                 "particles_nb": 4
                    //             },
                    //             remove: {
                    //                 "particles_nb": 2
                    //             },

                    //             // push: {
                    //             //     quantity: 4,
                    //             // },
                    //             // repulse: {
                    //             //     distance: 200,
                    //             //     duration: 0.4,
                    //             // },
                    //         },
                    //     },
                    //     particles: {
                    //         polygon: {
                    //             "nb_sides": 5
                    //         },
                    //         color: {
                    //             value: "#ffffff",
                    //         },
                    //         links: {
                    //             color: "#ffffff",
                    //             distance: 160,
                    //             enable: true,
                    //             opacity: 0.5,
                    //             width: 2,
                    //         },
                    //         collisions: {
                    //             enable: true,
                    //         },
                    //         move: {
                    //             direction: "none",
                    //             enable: true,
                    //             outModes: {
                    //                 default: "bounce",
                    //             },
                    //             attract: {
                    //                 enable: false,
                    //                 rotateX: 600,
                    //                 rotateY: 1200
                    //             },
                    //             random: false,
                    //             speed: 1.5,
                    //             straight: false,
                    //         },
                    //         number: {
                    //             density: {
                    //                 enable: true,
                    //                 area: 800,
                    //             },
                    //             value: 100,
                    //         },
                    //         opacity: {
                    //             value: 0.5,
                    //         },
                    //         shape: {
                    //             type: "circle",
                    //         },
                    //         size: {
                    //             value: { min: 1, max: 5 },
                    //         },
                    //     },
                    //     detectRetina: true,
                    //     config_demo: {
                    //         hide_card: false,
                    //         background_position: "50% 50%",
                    //         background_repeat: "no-repeat",
                    //         background_size: "cover"
                    //     }

                    // }}

                    options={{
                        fullScreen:{
                            zIndex:-1,
                        },
                        "particles": {
                          "number": {
                            "value": 100,
                            "density": {
                              "enable": true,
                              "value_area": 800
                            }
                          },
                          "color": {
                            "value": "#ffffff"
                          },
                          "shape": {
                            "type": "circle",
                            "stroke": {
                              "width": 0,
                              "color": "#ffffff"
                            },
                            "polygon": {
                              "nb_sides": 5
                            },
                            "image": {
                              "src": "img/github.svg",
                              "width": 100,
                              "height": 100
                            }
                          },
                          "opacity": {
                            "value": 0.8,
                            "random": false,
                            "anim": {
                              "enable": false,
                              "speed": 1.1,
                              "opacity_min": 0.1,
                              "sync": false
                            }
                          },
                          "size": {
                            "value": 4,
                            "random": true,
                            "anim": {
                              "enable": false,
                              "speed": 2,
                              "size_min": 0.1,
                              "sync": false
                            }
                          },
                          "line_linked": {
                            "enable": true,
                            "distance": 160,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1.5
                          },
                          "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                            }
                          }
                        },
                        "interactivity": {
                          "events": {
                            "onhover": {
                              "enable": true,
                              "mode": "repulse"
                            },
                            "onclick": {
                              "enable": true,
                              "mode": "push"
                            },
                            "resize": true
                          },
                          "modes": {
                            "grab": {
                              "distance": 300,
                              "line_linked": {
                                "opacity": 1
                              }
                            },
                            "bubble": {
                              "distance": 200,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 4
                            },
                            "repulse": {
                              "distance": 200
                            },
                            "push": {
                              "particles_nb": 4
                            },
                            "remove": {
                              "particles_nb": 2
                            }
                          }
                        },
                        "retina_detect": true,
                        "config_demo": {
                          "hide_card": false,
                          "background_position": "50% 50%",
                          "background_repeat": "no-repeat",
                          "background_size": "cover"
                        }
                      }
                    }

                />

                <div id="name-pavas">
                    <h1>Pavas Garg</h1>
                </div>
                <div id="icons">
                    <a href="http://github.com/pavas23" target="_blank"><i className="fa-brands fa-github fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/pavas-garg-606535223/" target="_blank"><i className="fa-brands fa-linkedin fa-3x"></i></a>
                    <a href="https://twitter.com/PavasGarg" target="_blank"><i className="fa-brands fa-twitter fa-3x"></i></a>
                    <a href="https://www.facebook.com/pavas.garg.1/" target="_blank"><i className="fa-brands fa-facebook fa-3x"></i></a>
                </div>
            </main>
        </>
    );
}
