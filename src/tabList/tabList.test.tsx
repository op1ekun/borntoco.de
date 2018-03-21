import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import TabList, { ITabsListProps } from './tabList';
import { tabs } from '../../test/dummies/tabProps.dummy';

describe('TabList component', () => {
    let hashRouterComponent: ReactWrapper<HashRouter>;

    it('renders an empty list element if not tabs were provided', () => {
        hashRouterComponent = mount(
            <HashRouter>
                <TabList tabs={ [] } />
            </HashRouter>
        );

        assert.equal(hashRouterComponent.find('ul').html(), '<ul class="tabs"></ul>');
    });
    
    describe('render', () => {
        beforeEach(() => {
            hashRouterComponent = mount(
                <HashRouter>
                    <TabList tabs={ tabs } />
                </HashRouter>
            );
        });

        it('renders list element', () => {
            assert.equal(hashRouterComponent.find('ul').length, 1);
        });

        it('renders correct number of tabs', () => {
            assert.equal(hashRouterComponent.find('li.tab').length, tabs.length);
        });

        it('renders the first tab link', () => {
            const {
                label,
                url
            } = tabs[0];
            
            const firstTab = hashRouterComponent.find('li.tab.one a');
            assert.equal(firstTab.text(), label);
            assert.equal(firstTab.props().href, `#/${ url }`);
        });

        it('renders the second tab link', () => {
            const {
                label,
                url
            } = tabs[1];
            
            const firstTab = hashRouterComponent.find('li.tab.two a');
            assert.equal(firstTab.text(), label);
            assert.equal(firstTab.props().href, `#/${ url }`);
        });
    });
});
