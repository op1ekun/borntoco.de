import * as React from 'react';
// import { NavLink } from 'react-router-dom';

export interface ITabProps {
    label: string;
    url: string;
    classes?: Array<string>;
}

export interface ITabsListProps {
    tabs: Array<ITabProps>;
}

export default class TabList extends React.Component<ITabsListProps, {}> {

    public render() {
        const  { tabs } = this.props;

        return (
            <ul className="tabs">
                { tabs && tabs.length
                ? tabs.map((tab, index) => {
                    const classes = tab.classes ?
                        tab.classes.join(' ') : '';

                    return  <li key={ index } className={ `tab ${ classes }` }>
                                {/* <NavLink to={ tab.url } activeClassName="active">{ tab.label }</NavLink> */}
                                <a href={`#${tab.url}` }>{ tab.label }</a>
                            </li>;
                })
                : null }
            </ul>
        );
    }
}
