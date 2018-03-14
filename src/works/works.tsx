import * as React from 'react';

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

export interface WorksProps {
    title: string;
    left: {
        para: Array<any>;
    };
    right: {
        para: Array<any>;
    };
}

export default class Works extends React.Component<WorksProps, {}> {

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
            right
        } = this.props;

        return(
            <section id="content">
                <h2>{ title }</h2>
                <article id="left">
                    { this.renderPara(left.para) }
                </article>
                <article id="right">
                    { this.renderPara(right.para) }
                </article>
            </section>
        );
        
    }
}
