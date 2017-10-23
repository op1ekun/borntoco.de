import * as React from 'react';
import { NavLink } from 'react-router-dom';

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
                ? <NavLink to={this.props.url} activeClassName="active">{this.props.label}<span></span></NavLink>
                : this.props.label }
            </li>
        );
    }
};
