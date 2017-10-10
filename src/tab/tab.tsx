import * as React from 'react';

export interface TabProps {
    label: string,
    url?: string
};

export default class Tab extends React.Component<TabProps, {}> {

	constructor(props: TabProps) {
        super();
    }

    public render() {
        return (
            <li>
                { this.props.url
                ? <a href={this.props.url}>{this.props.label}</a>
                : this.props.label }
            </li>
        );
    }
};
