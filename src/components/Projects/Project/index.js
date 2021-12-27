import React, { Component } from "react";
// import styles from "./Project.module.scss";

class Project extends Component {
    state = {
        contributors: [],
        languages: []
    };
    
    componentDidMount = () => {
        this.contributorsArray();
        this.languagesArray();
    };
    
    contributorsArray = () =>
        fetch("https://api.github.com/repos/icu-studio/${this.props.name}/contributors")
            .then(res => {
                return res.json();
            })
            .then(data => {
                const contributors = data;
                this.setState({
                    contributors
                });
            });

    languagesArray = () =>
        fetch(this.props.languages)
        .then(res => res.json())
        .then(data => {
            const languages = data;
            this.setState({
                languages
            });
        });

    render() {
        let languagesArray = Object.keys(this.state.languages);
        return(
            <div>
                <ul>
                    <li> Project ID: {this.props.id} </li>
                    <li> Project Name: {this.props.name} </li>
                    <li> Project Description: {this.props.description ? this.props.description : "No Description"} </li>
                    <li> Project Stars: {this.props.stars} </li>
                    <li> Project Forks: {this.props.forks} </li>
                    <li>
                        Project Contributors:
                        <ul>
                            {this.state.contributors.length > 0 &&
                                this.state.contributors.map(contributor => {
                                return (
                                    <li key={contributor.login}>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`https://www.github.com/${contributor.login}`}
                                    >
                                        {contributor.login}
                                    </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                    <li> 
                        Project Languages:
                        <ul>
                            {languagesArray.map((language, index) => {
                                return <li key={index}>{language}</li>;
                            })}
                        </ul>
                    </li>
                    <li> Project GitHub Link: {this.props.github} </li>
                    <li> Project License: {this.props.license ? this.props.license : "No License Stated"} </li>
                </ul>
                <hr />
            </div>
        )
    } 
};

export default Project;