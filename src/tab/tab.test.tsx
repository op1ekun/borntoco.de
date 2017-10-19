import * as React from 'react';
import { assert } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';

import Tab, { TabProps } from './tab';

describe('Tab', () => {
    let tabComponent: ShallowWrapper<TabProps>;

    beforeEach(() => {
        tabComponent = shallow(<Tab 
            label={'dummyLabel'}
        />);
    });

    describe('render', () => {
        const label = 'componentUnderTest';
        const url = 'dummy.url';
        const classes = [ 'one', 'two' ];

        it('renders a label', () => {
            tabComponent.setProps({
                label,
                classes
            });

            assert.equal(tabComponent.text(), label);
            assert.include(tabComponent.html(), 'class="tab one two"');
        });

        it('renders a link with the label\'s text', () => {
            tabComponent.setProps({
                label,
                url
            });

            assert.equal(tabComponent.find('a').props().href, url);
            assert.equal(tabComponent.find('a').text(), label);
        });
    });
});
