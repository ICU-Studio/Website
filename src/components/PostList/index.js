import React, { Component } from "react";
import { extractMetaData } from "../../utils/markdown";
import PostCard from "./PostCard";
// import styles from "./PostList.module.scss";

class PostList extends Component {
    state = {
        postInfos: [],
        postContents: [],
        projects: []
    };

    componentDidMount = () => { this.appData() };

    appData = () =>
        // fetch("https://api.github.com/orgs/icu-studio/repos")
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (Array.isArray(data)) {
        //             const projects = [...data];
        //             this.setState({
        //                 projects
        //             });
        //         }
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //         this.setState({
        //             projects: []
        //         });
        //     });
        //nested promises for fetching file names of root folder URL
        fetch("https://api.github.com/repos/ICU-Studio/SitePosts/git/trees/main").then(res => {
            return res.json();
        })
            .then((data) => {
                var postTreeUrl = data.tree[1].url; //url that we need to access /posts folder

                fetch(postTreeUrl).then((req) => {
                    return req.json();
                })
                    .then((treeUrlData) => {
                        if (Array.isArray(treeUrlData.tree)) {
                            const tree = [...treeUrlData.tree];
                            this.setState({
                                postInfos: tree
                            })
                            // let pInfos = [];
                            // let pContents = [];
                            // tree.forEach(async (item) => {
                            //     let [info, content] = await extractMetaData(item['path']);
                            //     let pcontent = {
                            //         "key": info['abbr'] ? info['abbr'] : info['title'].replace(/\s+/g, '-'),
                            //         "content": content
                            //     }
                            //     postInfos.push(info);
                            //     postContents.push(pcontent);
                            // })
                            // const postInfos = [...pInfos];
                            // const postContents = [...pContents];
                            // this.setState({
                            //     postInfos,
                            //     postContents
                            // })
                            console.log(this.state.postInfos)
                        }
                    })
            })
            .catch((err) => {
                console.log(`[Error] ${err}`);
                this.setState({
                    postInfos: [],
                    postContents: []
                })
            })

    render() {
        // console.log(this.state.postInfos);
        // console.log(this.state.postContents);
        let projectArray = this.state.postInfos.forEach(async(project) => {
            const [meta, content] = await extractMetaData(project['path'])
            console.log(meta)
            return <p>{meta.title}</p>
        });
        return (
            <section>
                <h2 className="heading">Project Showcase</h2>
                {projectArray}
                {/* {this.state.postInfos.map(post => {
                    return <PostCard post={post} />
                })} */}
            </section>
        );
    };
}

export default PostList;