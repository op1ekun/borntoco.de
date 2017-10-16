import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import { tabs } from '../../test/dummies/tabProps.dummy';

import Header from './header';

describe('Header', () => {

    describe('render', () => {
        let headerComponent: ReactWrapper;
    
        beforeEach(() => {
            headerComponent = mount(<Header tabs={ [] } />);
        });

        it('renders the logotype', () => {
            const logoElem = headerComponent.find('h1 > a');

            assert.equal(logoElem.length, 1);
            assert.equal(logoElem.text(), 'borntoco.de');
        });

        it('renders the quote', () => {
            const quoteElem = headerComponent.find('q > a');

            assert.equal(quoteElem.length, 1);
            assert.isString(quoteElem.text());
        });

        it('renders the nav menu', () => {
            headerComponent.setProps({
                tabs
            });

            assert.equal(headerComponent.find('nav ul.tabs li.tab').length, 2);
        });
    });
});
