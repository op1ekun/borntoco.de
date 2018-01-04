import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface TabProps {
    label: string;
    url: string;
    classes?: Array<string>;
}

export interface TabsListProps {
    tabs: Array<TabProps>;
}

export default class TabList extends React.Component<TabsListProps, {}> {

    public render() {
        const  { tabs } = this.props;

        return (
            <ul className="tabs">
                { tabs && tabs.length
                ? tabs.map((tab, index) => {
                    const classes = tab.classes ?
                        tab.classes.join(' ') : '';

                    return  <li key={ index } className={ `tab ${ classes }` }>
                                <NavLink to={ tab.url } activeClassName="active">{ tab.label }</NavLink>
                            </li>;
                })
                : null }
            </ul>
        );
    }
}
