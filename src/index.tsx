import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './header/header';
import About from './about/about';
import Footer from './footer/footer';

export class Noop extends React.Component<{ label: string }, {}> {
    public render() {
        return <div>{ this.props.label }</div>;
    }
}

const tabs = [
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

render(
    <HashRouter>
        <div id="wrapper">
            <Header
                tabs={ tabs } 
            />
            <Switch>
                <Redirect exact={ true } path="/" to="/about" />
                <Route path="/about" render={ () => <About title="about me" /> } />
                <Route path="/works" render={ () => <Noop label="works" /> } />
                <Route path="/contact" render={ () => <Noop label="contact" /> } />
            </Switch>
            <Footer
                tabs={ tabs }
            />
        </div>

    </HashRouter>,
document.getElementById('root'));
