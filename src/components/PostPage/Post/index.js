import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Style
import styles from "./Post.module.scss";
import 'katex/dist/katex.min.css';

export class Post extends React.Component {

    render() {
        const markdown = this.props.children;
        return (
            <ReactMarkdown
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '') // language-${language name}
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={dracula}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={styles.inlineCode} {...props}>
                                {children}
                            </code>
                        )
                    },
                    table({ node, inline, className, children, ...props }) {
                        return <table children={children} className={styles.table} />
                    },
                    blockquote({ node, inline, className, children, ...props }) {
                        return <blockquote className={styles.quote} children={children} />
                    }
                }}

                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                children={markdown}
            />
        );
    }
}