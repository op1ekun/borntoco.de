import * as React from 'react';

export interface AboutProps {
    title: string;
}

export default class About extends React.Component<AboutProps, {}> {
    render() {
        const {
            title
        } = this.props;

        // FIXME
        // const twitterSnipper = (d: Document, s: string, id: string) => { let js; const fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='//platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

        return(
            <section id="content">
                <h2>{ title }</h2>
                <article id="left">
                    <p>
                        Hello! My name is Lukasz Piatkowski, but You can call me Lucas. 
                        I&nbsp;live&nbsp;and&nbsp;work in United Kingdom, in&nbsp;the&nbsp;beautiful city of&nbsp;London. 
                        I&nbsp;am&nbsp;a&nbsp;passionate front-end developer and a&nbsp;web standards enthusiast
                         with focus on Javascript.
                        Every day I&nbsp;try to learn something new to extend my programming skills 
                        and to stay in touch with the latest&nbsp;technologies. 
                    </p>
                </article>
                <article id="center">
                    <p>
                        As a big fan of social media I&nbsp;have 
                        created a <a href="https://github.com/op1ekun">github</a> account.
                        There you can find projects I&nbsp;have started, mostly, 
                        for the purpose of using them in my job. 
                        From time to time 
                        I&nbsp;contribute to <a href="http://stackoverflow.com/users/1595495/op1ekun">stackoverflow</a>.
                    </p>
                    <p>
                        I try to be a team player in both my professional and private life 
                        because I&nbsp;believe in the spirit of
                        cooperation and that great things can be achieved together.
                    </p>
                    
                    <p>
                        <span>Don't forget to</span>
                        <a href="https://twitter.com/op1ekun" className="twitter-follow-button" data-show-count="false" data-size="large" data-show-screen-name="false">Follow @op1ekun</a>
                        <span>me on</span> 
                        <a href="https://twitter.com/op1ekun">Twitter!</a>
                    </p>
                </article>
                <article id="right">
                    <ul>
                        <li className="odd">
                            <a href="https://github.com/op1ekun">
                                <img src="/static/img/github_250.png" alt="My profile on github" />
                            </a>
                        </li>
                        <li className="even">
                            <a href="http://stackoverflow.com/users/1595495/op1ekun">
                                <img src="/static/img/stack_250.png" alt="My profile on stackoverflow" />
                            </a>
                        </li>
                    </ul>
                </article>
            </section>
        );
    }
}
