import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import { tabsContent } from '../content';

import Footer from './footer';

describe('Footer component', () => {

    describe('render', () => {
        let hashRouterComponent: ReactWrapper;
    
        beforeEach(() =>
            hashRouterComponent = mount(
                <HashRouter>
                    <Footer tabs={ tabsContent } />
                </HashRouter>)
        );

        it('renders the menu', () => {
            assert.equal(hashRouterComponent.find('#footer_wrapper li.tab').length, tabsContent.length);
        });

        it('renders paragraphs', () => {
            assert.equal(hashRouterComponent.find('#footer_wrapper p').length, 3);
        });
    });
});
