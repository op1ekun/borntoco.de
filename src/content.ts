import { IWorksProps } from './works/works';
import { IAboutProps } from './about/about';
import { ITabProps } from './tabList/tabList';

export const tabsContent: Array<ITabProps> = [
    {
        label: 'about me',
        url: '/about',
        classes: [ 'first' ]
    },
    {
        label: 'works',
        url: '/works'
    },
    {
        label: 'contact',
        url: '/contact'
    }
];

export const worksContent: IWorksProps = {
    title: 'works',
    left: {
        para: [
            {
                text: 'test1'
            },
            {
                text: 'test2'
            }
        ]
    },
    right: {
        para: [
            {
                text: 'test3'
            }
        ]
    }
};

export const aboutMeContent: IAboutProps = {
    title: 'about me',
    left: {
        para: [
            {
                text: `Hello! My name is Lukasz. 
                I live, and work in United Kingdom, in the beautiful city of London. 
                I am a passionate front-end developer, and a web standards enthusiast
                 with a major focus on Javascript.`
            },
            {
                text: `Every day I try to learn something new to improve my skills, 
                and to stay in touch with the latest technologies. You can find, a part of these journey on this website.`
            }
        ],
    },
    center: {
        para: [
            {
                text: `I'm a proud owner of a {{link:github}} account.
                There you can find my pet projects, and other things I accumulated while working on numerous projects.
                These same goes for {{link:gist}} page.
                I also like to contribute to {{link:so}} from time to time.`,
                links: {
                    'github': {
                        label: 'github',
                        href: 'https://github.com/op1ekun',
                    },
                    'gist': {
                        label: 'gist',
                        href: 'https://gist.github.com/op1ekun',
                    },
                    'so': {
                        label: 'stackoverflow',
                        href: 'http://stackoverflow.com/users/1595495/op1ekun'
                    }
                }
            },
            {
                text: `I always like to be a team player in both my professional, and private life 
                because I believe in the spirit of
                cooperation, and that great things can be achieved together.`
            }
        ]
    },
    right: {}
};
