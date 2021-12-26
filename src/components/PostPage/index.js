import React, { useState, useEffect } from 'react';
import { Post } from './Post';

import { safeLoadFront } from 'yaml-front-matter';

export const PostPage = (props) => {

    const [meta, setMeta] = useState([]);
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ICU-Studio/SitePosts/main/posts/HelloWorld.md")
            .then((res) => {
                return res.text();
            })
            .then((text) => {
                // load front-matter
                const metaData = safeLoadFront(text);
                const content = metaData.__content;

                setMeta(metaData);
                setMarkdown(content);
            })
    }, []);

    return (
        <div>
            Post Page
            <Post children={markdown} />
        </div>
    )
}