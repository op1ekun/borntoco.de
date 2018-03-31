import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import TabList, { ITabsListProps } from './tabList';
import { tabsContent } from '../content';

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
                    <TabList tabs={ tabsContent } />
                </HashRouter>
            );
        });

        it('renders list element', () => {
            assert.equal(hashRouterComponent.find('ul').length, 1);
        });

        it('renders correct number of tabs', () => {
            assert.equal(hashRouterComponent.find('li.tab').length, tabsContent.length);
        });

        it('renders the first tab link', () => {
            const {
                label,
                url
            } = tabsContent[0];
            
            const firstTab = hashRouterComponent.find('li.tab a').first();
            assert.equal(firstTab.text(), label);
            assert.equal(firstTab.props().href, `#${ url }`);
        });

        it('renders the last tab link', () => {
            const {
                label,
                url
            } = tabsContent[2];
            
            const lastTab = hashRouterComponent.find('li.tab a').last();
            assert.equal(lastTab.text(), label);
            assert.equal(lastTab.props().href, `#${ url }`);
        });
    });
});
