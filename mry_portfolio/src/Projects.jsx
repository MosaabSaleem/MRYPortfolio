import "./Styles/Projects.css";

export default function Projects() {
    return (
        <div className="Projects">
            <h1 className="ProjectsTitle">Our Projects</h1>
            <p className="ProjectsText">Explore some of our projects below!</p>
            <div className="ProjectsList">
                <div className="ProjectCard">
                    <h2 className="ProjectTitle">Project 1</h2>
                    <p className="ProjectDescription">Description of Project 1.</p>
                </div>
                <div className="ProjectCard">
                    <h2 className="ProjectTitle">Project 2</h2>
                    <p className="ProjectDescription">Description of Project 2.</p>
                </div>
                <div className="ProjectCard">
                    <h2 className="ProjectTitle">Project 3</h2>
                    <p className="ProjectDescription">Description of Project 3.</p>
                </div>
            </div>
        </div>
    );
}