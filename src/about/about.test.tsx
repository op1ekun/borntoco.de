import * as React from 'react';
import { assert } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';

import About, { AboutProps } from './about';

describe('About content', () => {

    describe('render', () => {
        let aboutComponent: ShallowWrapper;
        const aboutContent: AboutProps = {
            title: 'Dummy Title'
        };

        beforeEach(() => {
            aboutComponent = shallow(
                <About
                    { ...aboutContent }
                />
            );
        });

        it('renders content section', () => {
            const section = aboutComponent.find('section');
            assert.include(section.html(), 'id="content"');
        });

        it('renders title', () => {
            const title = aboutComponent.find('h2');
            assert.equal(title.text(), aboutContent.title);
        });

        it('renders article columns', () => {
            const articles = aboutComponent.find('article');
            assert.equal(articles.length, 3);  
        });
        
        it('renders left column as text', () => {
            const leftContent = aboutComponent.find('#left > p');
            assert.isString(leftContent.text());
            assert(leftContent.text().length > 0);
        });
        
        it('renders center column as paragraphs', () => {
            const paragraphs = aboutComponent.find('#center p');
            assert.equal(paragraphs.length, 3);

            paragraphs.forEach((item) => {
                assert.isString(item.text());
                assert(item.text().length > 0);
            });
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
