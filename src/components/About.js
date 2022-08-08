
import "../css/about.css"


export default function About(){
    return(
        <>
        <div id = "about">
            <div id = "about-left">
            <img src={require("./pavas-profilepic.jpeg")} />
            </div>
            <div id = "about-right">
                <div id = "about-heading">
                    <h2>About Me</h2>
                </div>
                <div id = "about-para">
                    <p>
                        Hi, I'm Computer Science undergrad at BITS Pilani. I am interested in full stack
                        web development and I like to solve problems which require logic.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}