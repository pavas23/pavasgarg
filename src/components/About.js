
import "../css/about.css"


export default function About(){
    return(
        <>
        <div id = "about">
            <div id = "about-left">
            <img src={require("./images/pavas-profilepic.jpeg")} />
            </div>
            <div id = "about-right">
                <div id = "about-heading">
                    <h2>About Me</h2>
                </div>
                <div id = "about-para">
                    <p>
                        Hi, I'm Computer Science undergrad at BITS Pilani. I am interested in full stack
                        web development which fascinates me and I am motivated towards learning new Skills
                        and technologies.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

