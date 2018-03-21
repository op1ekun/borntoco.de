import * as React from 'react';
import { IParagraph, Paragraph } from '../para/para';

export interface IWorksProps {
    title: string;
    left: {
        para: Array<IParagraph>;
    };
    right: {
        para: Array<IParagraph>;
    };
}

export default class Works extends React.Component<IWorksProps, {}> {

    public render() {
        const {
            title,
            left,
            right
        } = this.props;

        return(
            <section id="content">
                <h2>{ title }</h2>
                <article id="left">
                    { left.para.map((singlePara, index) => <Paragraph key={ index } { ...singlePara } />) }
                </article>
                <article id="right">
                    { right.para.map((singlePara, index) => <Paragraph key={ index } { ...singlePara } />) }
                </article>
            </section>
        );
        
    }
}
