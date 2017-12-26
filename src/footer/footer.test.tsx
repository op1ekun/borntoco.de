import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import { tabs } from '../../test/dummies/tabProps.dummy';

import Footer from './footer';

describe('Footer component', () => {

    describe('render', () => {
        let hashRouterComponent: ReactWrapper;
    
        beforeEach(() =>
            hashRouterComponent = mount(
                <HashRouter>
                    <Footer tabs={ tabs } />
                </HashRouter>)
        );

        it('renders the menu', () => {
            assert.equal(hashRouterComponent.find('#footer_wrapper li.tab').length, 2);
        });

        it('renders paragraphs', () => {
            assert.equal(hashRouterComponent.find('#footer_wrapper p').length, 3);
        });
    });
});
