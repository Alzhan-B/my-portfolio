const projects = [
  { title: "Project One", description: "A brief description of project one." },
  { title: "Project Two", description: "A brief description of project two." },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
