import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import Tab, { TabProps } from './tab';

describe('Tab', () => {

    describe('render', () => {
        const label = 'componentUnderTest';
        const url = 'dummy.url';
        const classes = [ 'one', 'two' ];
    
        let hashRouterComponent: ReactWrapper;
    
        it('renders a tab with just a label', () => {
            hashRouterComponent = mount(
                <HashRouter>
                    <Tab label={ label } classes={ classes } />
                </HashRouter>);
    
            assert.equal(hashRouterComponent.text(), label);
            assert.notInclude(hashRouterComponent.html(), 'href');
            assert.include(hashRouterComponent.html(), 'class="tab one two"');
        });
    
        it('renders a link with the label\'s text', () => {
            hashRouterComponent = mount(
                <HashRouter>
                    <Tab label={ label } url={ url } classes={ classes } />
                </HashRouter>);
    
            assert.equal(hashRouterComponent.find('a').props().href, `#/${ url }`);
            assert.equal(hashRouterComponent.find('a').text(), label);
        });
    });
});
