import * as React from 'react';
import TabList, { ITabsListProps } from '../tabList/tabList';

export default class Footer extends React.Component<ITabsListProps, {}> {
    
    public render() {
        const { tabs } = this.props;

        // FIXME provide values through props, there should be no hardcoded stuff here
        return (
            <footer>
                <div id="footer_wrapper">
                    <TabList tabs={ tabs } />

                    <p><a href="mailto:lukasz@borntoco.de">lukasz @borntoco.de</a></p>
                    <p><a href="">+44 747 7050 023</a></p>

                    <p>copyright &copy;2019 borntoco.de</p>            
                </div>
            </footer>
        );
    }
}
