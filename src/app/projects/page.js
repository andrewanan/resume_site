export default function ProjectsPage() {
    const projects = [
        {
            name: "Ol' College Try",
            description: "Submission for Stevens Algorithmic Trading Competition 2024. Placed 6/15.",
            link: "https://github.com/andrewanan/ol_college_try_SATC_S2024",
        },
        {
            name: "Digital Clock on Nexys-A7 FPGA",
            description: "Final Project for Digital System Design, took inspiration from preexisting clock project found online.",
            link: "https://github.com/cfoote5/CPE487_FinalProject",
        },
        {
            name: "Port Authority Automation Project",
            description: "Automated report creation for daily spotchecks utilizing pandas and seaborn for data visulaizations",
            link: "https://github.com/andrewanan/PANYNJ_project",
        },
    ];
    return (
        <section className="projects-section">
            <h1>What I've Worked On So Far</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.name}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <a className="temp" href={project.link} target="_blank" rel="noopener noreferrer">
                        View on Github
                    </a>
                    </li>
                ))}
            </ul>
        </section>
    );
    };