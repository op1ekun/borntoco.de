import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import { aboutMeContent } from '../content';
import { Paragraph, IParagraph } from '../para/para';

describe('Paragraph component', () => {
    let paragraphComponent: ReactWrapper<Paragraph>;
    const paraProps: IParagraph = {
        className: 'testPara',
        text: `some {{link:test}} with
            moar {{link:test2}}`,
        links: [
            {
                label: 'test',
                href: 'test.url'
            },
            {
                label: 'test2',
                href: 'test2.url',
                className: 'test2'
            }
        ]
    };

    describe('render', () => {

        beforeEach(() => {
            paragraphComponent = mount(
                <Paragraph
                    { ...paraProps }
                />
            );
        });

        it('renders paragraph element', () => {
            const para = paragraphComponent.find('.testPara');
            assert.equal(para.length, 1);
        });

        it('renders the first link', () => {
            const firstLinkText = paraProps.links[0].label;
            const firstLink = paragraphComponent.find('a').first();
            assert.equal(firstLink.length, 1);
            assert.equal(firstLink.text(), firstLinkText);
        });

        it('renders the last link', () => {
            const lastLinkText = paraProps.links[1].label;
            const lastLink = paragraphComponent.find('a').last();
            assert.equal(lastLink.length, 1);
            assert.equal(lastLink.text(), lastLinkText);
        });
    });
});
