import { AboutProps } from './about/about';
import { TabsListProps, TabProps } from './tabList/tabList';

export const tabsContent: Array<TabProps> = [
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

export const aboutMeContent: AboutProps = {
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
                and to stay in touch with the latest\u00A0technologies.`
            }
        ],
    },
    center: {
        para: [
            {
                text: `As a big fan of social media I\u00A0have 
                created a {{link:github}} account.
                There you can find projects I\u00A0have started, mostly, 
                for the purpose of using them in my job. 
                From time to time 
                I\u00A0contribute to {{link:stackoverflow}}.`,
                links: [
                    {
                        label: 'github',
                        href: 'https://github.com/op1ekun'
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
                text: `Don't forget to {{link:follow}} me on {{link:twitter}}`,
                links: [
                    {
                        className: 'twitter-follow-button',
                        label: 'Follow @op1ekun',
                        href: 'https://twitter.com/op1ekun' 
                    },
                    {
                        label: 'Twitter!',
                        href: 'https://twitter.com/op1ekun'
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
            }
        ]
    }
};
