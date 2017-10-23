import * as React from 'react';
import TabList, { TabsListProps } from '../tabList/tabList';

export default class Header extends React.Component<TabsListProps, {}> {
    
    public render() {
        const { tabs } = this.props;

        return (
            <header>
                <h1>
                    <a href="/">borntoco.de<span></span></a>
                </h1>
                <q>
                    <a href="http://www.codinghorror.com/blog/2004/08/why-im-the-best-programmer-in-the-world.html">But it's not our job to be better than anyone else; we&nbsp;just need to be better than we were a year ago.
                    <strong>-&nbsp;Jeff&nbsp;Atwood</strong></a>
                </q>
                <nav id="nav">
                    <TabList tabs={tabs} />
                </nav>                 
            </header>
        );
    }
}
