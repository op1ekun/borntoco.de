import * as React from 'react';
import { assert } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';

import About, { AboutProps } from './about';

describe('About component', () => {

    describe('render', () => {
        let aboutComponent: ShallowWrapper;
        const aboutContent: AboutProps = {
            title: 'Dummy Title',
            left: {
                para: [
                    {
                        text: 'col1'
                    }
                ]
            },
            center: {
                para: [
                    {
                        text: '{{link:dummy1}} col2_1 {{link:dummy2}}.',
                        links: [
                            {
                                href: 'dummy.url1',
                                label: 'dummy1'
                            },
                            {
                                href: 'dummy.url2',
                                label: 'dummy2'
                            }
                        ]
                    },
                    {
                        text: 'col2_2',
                        links: [
                            {
                                href: 'dummy.url3',
                                label: 'dummy3'
                            }
                        ]
                    }
                ]
            },
            right: {
                links: [
                    {
                        href: 'dummy.url',
                        imagePath: 'dummy.path'
                    },
                    {
                        href: 'dummy.url2',
                        imagePath: 'dummy.path2'
                    }
                ]
            }
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

        it('renders links in the center column', () => {
            const links = aboutComponent.find('#center a');
            assert.equal(links.length, 4);
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
