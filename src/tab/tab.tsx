import * as React from 'react';

export interface TabProps {
    label: string,
    url?: string
};

export default class Tab extends React.Component<TabProps, {}> {

    constructor(props: TabProps) {
        super(props);
    }

    public render() {  
        return (
            <li className="tab">
                { this.props.url
                ? <a href={this.props.url}>{this.props.label}</a>
                : this.props.label }
            </li>
        );
    }
};
