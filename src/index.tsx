import * as React from 'react';
import { render } from 'react-dom';
// import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { HeaderView } from './header/header';
// import About from './about/about';
// import Works from './works/works';
// import Footer from './footer/footer';

import myStore from './store';

export class Noop extends React.Component<{ label: string }, {}> {
    public render() {
        return <div>{ this.props.label }</div>;
    }
}

render(
    <Provider store={myStore}>
        <HeaderView />
    </Provider>,
document.getElementById('root'));
