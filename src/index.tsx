import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './header/header';
import About from './about/about';
import Works from './works/works';
import Footer from './footer/footer';

import { worksContent, aboutMeContent, tabsContent } from './content';

export class Noop extends React.Component<{ label: string }, {}> {
    public render() {
        return <div>{ this.props.label }</div>;
    }
}

render(
    <HashRouter>
        <div id="wrapper">
            <Header
                tabs={ tabsContent } 
            />
            <Switch>
                <Redirect exact={ true } path="/" to="/about" />
                <Route path="/about" render={ () => <About { ...aboutMeContent } /> } />
                <Route path="/works" render={ () => <Works { ...worksContent } /> } />
                <Route path="/contact" render={ () => <Noop label="contact" /> } />
            </Switch>
            <Footer
                tabs={ tabsContent }
            />
        </div>

    </HashRouter>,
document.getElementById('root'));
