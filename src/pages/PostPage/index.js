import React, { useState, useEffect } from 'react';
import { Post } from '../../components/Post';
import { extractMetaData } from '../../utils/markdown';



export const PostPage = (props) => {
    const [metaData, setMetaData] = useState({});
    const [markdown, setMarkdown] = useState("");

    useEffect(async () => {
        const [meta, markdown] = await extractMetaData("HelloWorld.md");
        setMetaData(meta);
        setMarkdown(markdown);
    }, [])
    
    return (
        <div>
            Post Page
            <Post children={markdown} />
        </div>
    )
}