import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import TabList from './tabList';
import { tabs } from '../../test/dummies/tabProps.dummy';

describe('TabList', () => {
    let listComponent: ReactWrapper;

    beforeEach(() => {
        listComponent = mount(<TabList tabs={[]} />);
    });

    describe('render', () => {
        it('renders an empty list element', () => {
            assert.equal(listComponent.find('ul').html(), '<ul class="tabs"></ul>');
        });

        it('renders list element', () => {
            listComponent.setProps({
                tabs
            });

            assert.equal(listComponent.find('ul').length, 1);
        });

        it('renders correct number of tabs', () => {
            listComponent.setProps({
                tabs
            });

            assert.equal(listComponent.find('li.tab').length, tabs.length);
        });
    });
});
