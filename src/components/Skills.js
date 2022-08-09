
import { useEffect } from "react";
import "../css/skills.css"

export default function Skills() {
    
    useEffect(function(){
    var skillDivs = document.querySelectorAll('.skill-level');
    var skillSection = document.getElementById('skills');
    window.addEventListener('scroll', scrollCheck);
    var animationDone = [false, false, false, false, false, false, false,false,false];


    function scrollCheck() {
        for (let i = 0; i < skillDivs.length; i++) {
            let coordinates = skillDivs[i].getBoundingClientRect();
            if ((!animationDone[i]) && (coordinates.top <= window.innerHeight)) {
                fillBar(skillDivs[i]);
                animationDone[i] = true;
            }
            else if (coordinates.top > window.innerHeight) {
                animationDone[i] = false;
            }
        }
    }
    function fillBar(bar) {
        bar.style.width = "0";
        let maxWidth = bar.getAttribute('data-value');
        let currentWidth = 0;
        var interval = setInterval(function () {
            if (currentWidth >= maxWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 25);

    }
});


    return (
        <>
            <div id="skills">
                <div id="skills-heading">
                    <h2>Skills</h2>
                </div>
                <div id="skills-icons">

                    <div className="skill-container">
                        <img src="https://user-images.githubusercontent.com/97559428/182453721-489a3c5e-37b2-438a-b101-4a626abb57ed.svg" />
                        <div className="skill-progress">
                            <div className="percent-85 skill-level" data-value="85">
                                <div className="skill-name">
                                    <span>
                                        HTML
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <img src="https://user-images.githubusercontent.com/97559428/182453845-6bc43426-ac29-44b2-b366-f8bf9d4cc046.svg" />
                        <div className="skill-progress">
                            <div className="percent-80 skill-level" data-value="80">
                                <div className="skill-name">
                                    <span>
                                        CSS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <img src="https://user-images.githubusercontent.com/97559428/182455810-77bfcaf1-b6e1-4a07-95ee-2d1f8bad5c32.svg" />
                        <div className="skill-progress">
                            <div className="percent-67 skill-level" data-value="67">
                                <div className="skill-name">
                                    <span>
                                        JavaScript
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <img src="https://user-images.githubusercontent.com/97559428/182455189-39870fc7-31e8-4826-8300-be3bd79b6ae5.svg" />
                        <div className="skill-progress">
                            <div className="percent-75 skill-level" data-value="75">
                                <div className="skill-name">
                                    <span>
                                        React
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="skill-container">
                        <img src="https://user-images.githubusercontent.com/97559428/182455184-6a0dd7bb-f318-4896-a78a-d1da9309026b.svg" />
                        <div className="skill-progress">
                            <div className="percent-70 skill-level" data-value="70">
                                <div className="skill-name">
                                    <span>
                                        NodeJS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="skill-container">
                        <img src="https://user-images.githubusercontent.com/97559428/182457493-2083b604-d271-4b8e-bbf1-0539bc73c538.svg" />
                        <div className="skill-progress">
                            <div className="percent-90 skill-level" data-value="90">
                                <div className="skill-name">
                                    <span>
                                        ExpressJS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="skill-container">
                        <img src="https://user-images.githubusercontent.com/97559428/182455179-3bba1e1e-97f7-43ea-af1c-e71032c5e8c2.svg" />
                        <div className="skill-progress">
                            <div className="percent-65 skill-level" data-value="65">
                                <div className="skill-name">
                                    <span>
                                        MongoDB
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="skill-container">
                        <img src="https://user-images.githubusercontent.com/97559428/182455187-1be9dd31-d358-4aa0-a00f-ff4dc112d471.svg" />
                        <div className="skill-progress">
                            <div className="percent-73 skill-level" data-value="73">
                                <div className="skill-name">
                                    <span>
                                        Python
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="skill-container">
                        <img src="https://user-images.githubusercontent.com/97559428/182455806-21ec2dd0-1404-4cc1-b67a-d1cd3f87b54f.svg" />
                        <div className="skill-progress">
                            <div className="percent-60 skill-level" data-value="60">
                                <div className="skill-name">
                                    <span>
                                        C
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
