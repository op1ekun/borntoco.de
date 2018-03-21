import * as React from 'react';

export interface IParagraphLink {
    className?: string;
    label: string;
    href: string;
    [key: string]: string | number | boolean;
}

export interface IParagraph {
    text: string;
    className?: string;
    links?: Array<IParagraphLink>;
}

export class Paragraph extends React.Component<IParagraph, any> {

    /**
     * Renders paragraphs with links as React components ()
     * @param para
     */
    public render() {
        const {
            text,
            links,
            className: paraClassName
        } = this.props;

        const paraList = text.split(/{{link:\w+}}/);
        let processed: Array<any> = [];

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

        return (<p className={ [ 'para', paraClassName ].join(' ') } >{ processed }</p>);
    }
}
