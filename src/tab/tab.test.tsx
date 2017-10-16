import * as React from 'react';
import { assert } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';

import Tab from './tab';

describe('Tab', () => {
    let tabComponent: ShallowWrapper;

    beforeEach(() => {
        tabComponent = shallow(<Tab 
            label={'dummyLabel'}
        />);
    });

    describe('render', () => {
        const label = 'componentUnderTest';
        const url = 'dummy.url';

        it('renders a label', () => {
            tabComponent.setProps({
                label
            });

            assert.equal(tabComponent.text(), label);
            assert.include(tabComponent.html(), 'class="tab"');
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
