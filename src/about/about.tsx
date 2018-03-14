import * as React from 'react';
import { parsePath } from 'history/PathUtils';
import { updatePartiallyEmittedExpression } from 'typescript';

// TODO extract to it's own component
export interface ParaLink {
    className?: string;
    label: string;
    href: string;
    [key: string]: string | number | boolean;
}

export interface Para {
    text: string;
    links?: Array<ParaLink>;
}

export interface AboutProps {
    title: string;
    left: {
        para: Array<Para>;
    };
    center: {
        para: Array<Para>;
    };
    right: {
        links: [
            {
                href: string;
                imagePath: string;
            }
        ];
    };
}

export default class About extends React.Component<AboutProps, {}> {

    componentDidMount() {
        (window as any).twttr.widgets.load();
    }

    // TODO move it to a separate Paragraph component
    /**
     * Renders paragraphs with links as React components ()
     * @param para
     */
    private renderPara(para: Array<Para>) {
        return (
            para.map((para, index) => {
                const {
                    text,
                    links
                } = para;

                let processed: Array<any> = [];
                const paraList = text.split(/{{link:\w+}}/);

                if (links && paraList.length > 1) {
                    // TODO improve this by matching links by label, array approach is a bit flaky
                    // process backwards to avoid issues with the array changing size on fly
                    for (let i = paraList.length - 1; i >= 0; i--) {
                        if (links[i]) {
                            const currentLink = links[i];
                            const {
                                label, href, className,
                                ...rest
                            } = currentLink;

                            const linkElem = (
                                <a
                                    key={ i }
                                    href={ href }
                                    className={ className ? className : null }
                                    { ...rest }
                                >{ label }</a>
                            );
                            processed.unshift(linkElem);
                        }

                        processed.unshift(paraList[i]);
                    }
                } else {
                    processed = [ text ];
                }

                return <p key={ index }>{ processed }</p>;
            })
        );
    }

    public render() {
        const {
            title,
            left,
            center
        } = this.props;

        return(
            <section id="content">
                <h2>{ title }</h2>
                <article id="left">
                    { this.renderPara(left.para) }
                </article>
                <article id="center">
                    { this.renderPara(center.para) }
                </article>
                <article id="right">
                    <ul>
                        <li className="odd">
                            <a href="https://github.com/op1ekun">
                                <img src="/static/img/github_250.png" alt="My profile on github" />
                            </a>
                        </li>
                        <li className="even">
                            <a href="http://stackoverflow.com/users/1595495/op1ekun">
                                <img src="/static/img/stack_250.png" alt="My profile on stackoverflow" />
                            </a>
                        </li>
                    </ul>
                </article>
            </section>
        );
    }
}
