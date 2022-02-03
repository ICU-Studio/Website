import React, { Component } from "react";
import styles from "./Project.module.scss";
import ignore from "./ignore.json";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGlobe, faStar, faCodeBranch, faBalanceScale } from '@fortawesome/free-solid-svg-icons'

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contributors: [],
            languages: []
        };
    }

    componentDidMount = () => {
        this.contributorsArray();
        this.languagesArray();
    };

    contributorsArray = () =>
        fetch(`https://api.github.com/repos/icu-studio/${this.props.name}/contributors`)
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
        return (
            <div>
                {!ignore.includes(this.props.id) ? (
                    <div id={this.props.id} className={styles.Project}>
                        <a href={this.props.github}>{this.props.name.toUpperCase()}</a>
                        <p>{this.props.description}</p>
                        <h4>
                            <FontAwesomeIcon icon={faUsers} /> Contributor(s):{" "}
                        </h4>
                        <ul>
                            {this.state.contributors &&
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
                        <h4>
                            <FontAwesomeIcon icon={faGlobe} />{" "}
                            Language(s):
                        </h4>
                        <ul>
                            {languagesArray.map((language, index) => {
                                return <li key={index}>{language}</li>;
                            })}
                        </ul>
                        {this.props.forks !== null ? (
                            <h4>
                                <FontAwesomeIcon icon={faCodeBranch} /> Fork(s):{" "}
                                {this.props.forks}
                            </h4>
                        ) : null}
                        <h4>
                            <FontAwesomeIcon icon={faStar} /> Star(s):{" "}
                            {this.props.stars}
                        </h4>
                        {this.props.license !== null ? (
                            <div>
                                <hr />
                                <h5>
                                    <FontAwesomeIcon icon={faBalanceScale} />{" "}
                                    {this.props.license.name}
                                </h5>
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
        )
    }
};

export default Project;