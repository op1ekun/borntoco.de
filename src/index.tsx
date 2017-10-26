import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './header/header';

export class Noop extends React.Component<{ label: string }, {}> {
    public render() {
        return <div>{ this.props.label }</div>;
    }
}

render(
    <HashRouter>
        <div>
            <Header 
                tabs={ [
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
                ] } 
            />
            <Switch>
                <Redirect exact={ true } path="/" to="/about" />
                <Route path="/about" render={ () => <Noop label="about" /> } />
                <Route path="/works" render={ () => <Noop label="works" /> } />
                <Route path="/contact" render={ () => <Noop label="contact" /> } />
            </Switch>
        </div>
    </HashRouter>,
document.getElementById('header'));
