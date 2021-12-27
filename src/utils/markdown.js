import { safeLoadFront } from 'yaml-front-matter';

const extractMetaData = async (filename) => {

    return await fetch(`https://raw.githubusercontent.com/ICU-Studio/SitePosts/main/posts/${filename}`)
        .then((res) => {
            return res.text();
        })
        .then((text) => {
            // load front-matter
            const meta = safeLoadFront(text);
            const markdown = meta.__content;
            return [meta, markdown];
        })
        .catch((err) => {
            return err;
        })
}

export {
    extractMetaData
}