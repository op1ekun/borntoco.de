import * as React from 'react';
import { assert } from 'chai';

import { mount, ReactWrapper } from 'enzyme';

import TabList from './tabList';
import { TabProps } from '../tab/tab';

describe('TabList', () => {
    let listComponent: ReactWrapper;
    const tabs: TabProps[] = [
        {
            label: 'tab1'
        },
        {
            label: 'tab2',
            url: 'dummy2.url'
        }
    ];

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

            assert.equal(listComponent.find('li').length, tabs.length);
        });
    });
});
