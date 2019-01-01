import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import { aboutMeContent } from '../content';
import { Paragraph, IParagraph } from '../para/para';

describe('Paragraph component', () => {
    let paragraphComponent: ReactWrapper<Paragraph>;
    const paraProps: IParagraph = {
        className: 'testPara',
        text: `some {{link:test1}} with
            moar {{link:test2}} {{link:test3}}`,
        links: {
            'test1': {
                label: 'test one',
                href: 'test.url'
            },
            'test2': {
                label: 'test two',
                href: 'test2.url',
                className: 'test2'
            },
            'test3': {
                href: 'test3.url',
                className: 'test3'
            }
        }
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

        it('renders correct number of links', () => {
            const links = paragraphComponent.find('a');
            assert.equal(links.length, Object.keys(paraProps.links).length);
        });

        it('renders the first link', () => {
            const firstLinkText = paraProps.links['test1'].label
            const firstLink = paragraphComponent.find('a').first();
            assert.equal(firstLink.length, 1);
            assert.equal(firstLink.text(), firstLinkText);
        });

        it('renders the last link', () => {
            const lastLinkText = 'test3';
            const lastLink = paragraphComponent.find('a').last();
            assert.equal(lastLink.length, 1);
            assert.equal(lastLink.text(), lastLinkText);
        });
    });
});
