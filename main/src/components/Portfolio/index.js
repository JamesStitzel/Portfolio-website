import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'password-generator',
      description: 'JavaScript',
      link: "https://github.com/JamesStitzel/Password_Generator",
      repo: "https://github.com/JamesStitzel/Password_Generator"
    },
    {
      name: 'budget-tracker',
      description: 'MERN Stack',
      link: "https://github.com/JamesStitzel/Budget-Tracker",
      repo: "https://github.com/JamesStitzel/Budget-Tracker"
    },
    {
      name: 'daily-felon',
      description: 'HTML/CSS',
      link: "https://github.com/JamesStitzel/The-Daily-Felon",
      repo: "https://github.com/JamesStitzel/The-Daily-Felon"
    },
    {
      name: 'note-taker',
      description: 'Node/IoT',
      link: "https://github.com/JamesStitzel/Note-Taker-2000",
      repo: "https://github.com/JamesStitzel/Note-Taker-2000"
    },
    {
      name: 'day-planner',
      description: 'JavaScript/CSS',
      link: "https://github.com/JamesStitzel/Day-Planner",
      repo: "https://github.com/JamesStitzel/Day-Planner"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
