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
                I\u00A0live,\u00A0and\u00A0work in United Kingdom, in\u00A0the\u00A0beautiful city of\u00A0London. 
                I\u00A0am\u00A0a\u00A0passionate front-end developer, and a\u00A0web standards enthusiast
                 with a major focus on Javascript.`
            },
            {
                text: `Every day I\u00A0try to learn something new to improve my skills, 
                and to stay in touch with the latest\u00A0technologies. You can find, a part of these journey on this website.`
            }
        ],
    },
    center: {
        para: [
            {
                text: `I'm a proud owner of a {{link:github}} account.
                There you can find my pet projects, and other things I\u00A0accumulated while working for numerous parties.
                These same goes for {{link:replit}}, and {{link:gist}} accounts.
                From time to\u00A0time I\u00A0also contribute to {{link:stackoverflow}}.`,
                links: [
                    {
                        label: 'github',
                        href: 'https://github.com/op1ekun',
                    },
                    {
                        label: 'repl.it',
                        href: 'https://repl.it/@op1ekun',
                    },
                    {
                        label: 'gist',
                        href: 'https://gist.github.com/op1ekun',
                    },
                    {
                        label: 'stackoverflow',
                        href: 'http://stackoverflow.com/users/1595495/op1ekun'
                    }
                ]
            },
            {
                text: `I always like to be a team player in both my professional, and private life 
                because I\u00A0believe in the spirit of
                cooperation, and that great things can be achieved together.`
            },
            {
                text: `Don't forget to {{link:follow}} me!`,
                links: [
                    {
                        className: 'twitter-follow-button',
                        label: 'Follow @op1ekun',
                        href: 'https://twitter.com/op1ekun',
                        'data-show-count': false,
                        'data-show-screen-name': false
                    }
                ]
            }
        ]
    },
    right: {}
};
