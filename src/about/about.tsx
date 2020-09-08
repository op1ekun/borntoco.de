import * as React from 'react';
import { IParagraph, Paragraph } from '../para/para';

export interface IAboutProps {
    title: string;
    left: {
        para: Array<IParagraph>;
    };
    center: {
        para: Array<IParagraph>;
    };
    right: {
        links?: [
            {
                href: string;
                imagePath: string;
            }
        ];
    };
}

export default class About extends React.Component<IAboutProps, {}> {

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
                    { left.para.map((singlePara, index) => <Paragraph key={ index } { ...singlePara } />) }
                </article>
                <article id="center">
                    { center.para.map((singlePara, index) => <Paragraph key={ index } { ...singlePara } />) }
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
