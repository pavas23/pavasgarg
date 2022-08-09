
import "../css/projects.css"

export default function Projects() {
    return (
        <>
            <div id="projects">
                <div id="projects-heading">
                    <h2>Projects</h2>
                </div>
                <div id="projects-content">

                    <div className="projectex">
                        <div className="projectex-img">
                            <img src={require("./images/macbook img.png")} />
                        </div>
                        <div className="projectex-heading">
                            <h4>CloudNote</h4>
                            CloudNote is a full stack <b>MERN</b> web app which requires <b>authentication</b> and stores the user data in Mongo DB database after password hashing using <b>bcryptjs</b>. It allows you to store your notes on cloud. Your notes are accessible from any device that can access the Internet.
                        </div>
                    </div>

                    <div className="projectex">
                        <div className="projectex-img large-img">
                            <img src={require("./images/ipad.png")} />
                        </div>
                        <div className="projectex-heading">
                            <h4>Chat Engine</h4>
                            Chat Engine is a real time chatting web app made with <b>socket.IO</b> which allows two way connection between client and server. Each user is on <b>client server</b> which is connected to main server through which communication takes place among users.This is a <b>scalable app</b> which can be extended to multiple number of users.
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

