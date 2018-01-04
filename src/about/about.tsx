import * as React from 'react';
import { parsePath } from 'history/PathUtils';
import { updatePartiallyEmittedExpression } from 'typescript';

export interface Para {
    text: string;
    links?: [
        {
            label: string;
            href: string;
        }
    ];  
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
    private renderPara(para: Array<Para>) {
        return (
            para.map((para, index) => {
                const {
                    text,
                    links
                } = para;

                let processed: Array<any> = [];

                if (links) {
                    const paraList = text.split(/{{link:\w+}}/);

                    if (paraList.length > 1) {
                        for (let i = paraList.length - 1; i >= 0; i--) {
                            if (links[i]) {
                                const currentLink = links[i];
                                const linkElem = <a key={ i } href={ currentLink.href }>{ currentLink.label }</a>;
                                processed.unshift(linkElem);
                            }
    
                            processed.unshift(paraList[i]);
                        }
                    } else {
                        processed = paraList;    
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

        // FIXME
        // const twitterSnipper = (d: Document, s: string, id: string) => { let js; const fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='//platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

        return(
            <section id="content">
                <h2>{ title }</h2>
                <article id="left">
                    { this.renderPara(left.para) }
                </article>
                <article id="center">
                    { this.renderPara(center.para) }
                    <p>
                        <span>Don't forget to</span>
                        <a href="https://twitter.com/op1ekun" className="twitter-follow-button" data-show-count="false" data-size="large" data-show-screen-name="false">Follow @op1ekun</a>
                        <span>me on</span> 
                        <a href="https://twitter.com/op1ekun">Twitter!</a>
                    </p>
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
