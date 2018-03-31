import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import { tabsContent } from '../content';
import Header from './header';

describe('Header component', () => {

    describe('render', () => {
        let hashRouterComponent: ReactWrapper;
    
        beforeEach(() =>
            hashRouterComponent = mount(
                <HashRouter>
                    <Header tabs={ tabsContent } />
                </HashRouter>)
        );

        it('renders the logotype', () => {
            const logoElem = hashRouterComponent.find('h1 > a');

            assert.equal(logoElem.length, 1);
            assert.equal(logoElem.text(), 'borntoco.de');
        });

        it('renders the quote', () => {
            const quoteElem = hashRouterComponent.find('q > a');

            assert.equal(quoteElem.length, 1);
            assert.isString(quoteElem.text());
            assert(quoteElem.text().length > 0);
        });

        it('renders the nav menu', () => {
            assert.equal(hashRouterComponent.find('nav ul.tabs li.tab').length, tabsContent.length);
        });
    });
});
