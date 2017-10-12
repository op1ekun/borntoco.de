import * as React from 'react';
import Tab, { TabProps } from '../tab/tab';

export interface TabsListProps {
    tabs: TabProps[]
};

export default class TabList extends React.Component<TabsListProps, {}> {
    
    constructor(props: TabsListProps) {
        super(props);
    }

    public render() {
        const tabs = this.props.tabs;

        return (
            <ul className="tabs">
                { tabs && tabs.length
                ? tabs.map((tab, index) =>
                    <Tab { ...tab } key={index} />)
                : null }
            </ul>
        );
    }
}