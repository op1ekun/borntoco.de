import * as React from 'react';
import { assert } from 'chai';
import { mount, ReactWrapper } from 'enzyme';

import About, { IAboutProps } from './about';
import { aboutMeContent } from '../content';
import { Paragraph, IParagraph } from '../para/para';

describe('About component', () => {

    describe('render', () => {
        let aboutComponent: ReactWrapper<IAboutProps, any>;

        beforeEach(() => {
            (window as any).twttr = {
                widgets: {
                    load: () => {}
                }
            };

            aboutComponent = mount(
                <About { ...aboutMeContent } />
            );
        });

        it('renders content section', () => {
            const section = aboutComponent.find('section');
            assert.include(section.html(), 'id="content"');
        });

        it('renders title', () => {
            const title = aboutComponent.find('h2');
            assert.equal(title.text(), aboutMeContent.title);
        });

        it('renders article columns', () => {
            const articles = aboutComponent.find('article');
            assert.equal(articles.length, 3);  
        });
        
        it('renders left column as as paragraphs', () => {
            const paragraphs = aboutComponent.find('#left .para');
            assert.equal(paragraphs.length, aboutMeContent.left.para.length);
        });
        
        it('renders center column as paragraphs', () => {
            const paragraphs = aboutComponent.find('#center .para');
            assert.equal(paragraphs.length, aboutMeContent.center.para.length);
        });

        it('renders links in the center column', () => {
            const links = aboutComponent.find('#center a');
            const linksCount = aboutMeContent.center.para
                .reduce((acc, curr, index, para) => {
                    return acc + (curr.links ? curr.links.length : 0);
                }, 0);

            assert.equal(links.length, linksCount);
        });
        
        it('renders right column as list of links', () => {
            const listItems = aboutComponent.find('#right > ul li');
            assert.equal(listItems.length, 2);
            
            listItems.forEach((item) => {
                const linkElem = item.find('a');
                assert.equal(linkElem.length, 1);

                const imgElem = linkElem.find('img');
                assert.equal(imgElem.length, 1);
            });
        });
    });
});
