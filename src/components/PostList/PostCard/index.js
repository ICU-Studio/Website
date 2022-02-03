import React, { Component } from "react";

export default class PostCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const title = this.props.title;
        // console.log(meta);

        return (
            <div>
                <span>{title}</span>
                {/* <p>Author: {meta.author}</p>
                <p>Date: {meta.date.toDateString()}</p>
                <ul>
                    {meta.tags.map((tag, index) => {
                        return <li id={index}>{tag}</li>
                    })}
                </ul> */}
            </div>
        )
    }
}