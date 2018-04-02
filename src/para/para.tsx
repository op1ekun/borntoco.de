import * as React from 'react';

export interface IParagraphLink {
    className?: string;
    label?: string;
    href: string;
    [key: string]: string | number | boolean;
}

export interface IParagraph {
    text: string;
    className?: string;
    links?: {
        [key: string]: IParagraphLink;
    };
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

        const processed: Array<any | React.Component > = [ ];

        if (links) {
            const anyLink = /{{link:(\w+)}}/;
            const contentParts = text.split(/\s+/);

            contentParts.forEach((part, index) => {
                const matched = part.match(anyLink);

                if (matched) {
                    const linkId = matched[1];

                    const {
                        href,
                        label,
                        className: currClassName,
                        ...rest
                    } = links[ linkId ];

                    const linkElem = (
                        <a
                            key={ index }
                            href={ href }
                            className={ currClassName }
                            { ...rest }
                        >{ label || linkId }</a>
                    );

                    processed.push(' ', linkElem);
                }
                else {
                    processed.push(' ', part);
                }

            });
        }
        else {
            processed.push(text);
        }

        return (<p className={ [ 'para', paraClassName ].join(' ') }>{ processed }</p>);
    }
}
