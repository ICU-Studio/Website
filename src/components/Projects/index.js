import React, { Component } from "react";
import styles from "./Projects.module.scss";

// Components
import Project from "./Project";

class Projects extends Component {
    state = {
        projects: []
    };

    componentDidMount = () => { this.appData() };

    appData = () => 
        fetch("https://api.github.com/orgs/icu-studio/repos")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (Array.isArray(data)) {
                    const projects = [...data];
                    this.setState({
                      projects
                    });
                }
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    projects: []
                });
            });

    render() {
        let projectArray = this.state.projects.map(project => {
            return project.fork === false ? (
              <Project
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                stars={project.stargazers_count}
                forks={project.forks_count}
                languages={project.languages_url}
                github={project.svn_url}
                contributors={project.contributors_url}
                license={project.license}
              />
            ) : null;
        });
        return(
            <div>
                {projectArray}
            </div>
        );
    };
}

export default Projects;