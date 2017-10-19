import * as React from 'react';

export interface TabProps {
    label: string,
    url?: string,
    classes?: Array<string>
};

export default class Tab extends React.Component<TabProps, {}> {
    
    public render() {
        const {
            url,
            label,
            classes
        } = this.props;

        const classesString = classes && classes.length ? ` ${classes.join(' ')}` : ''; 
        
        return (
            <li className={`tab${classesString}`}>
                { this.props.url
                ? <a href={this.props.url}>{this.props.label}</a>
                : this.props.label }
            </li>
        );
    }
};
