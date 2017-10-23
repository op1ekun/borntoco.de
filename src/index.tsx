import * as React from 'react';
import { render } from 'react-dom';

import Header from './header/header';

render(<Header tabs={[
    {
        label: 'about me',
        url: '/about',
        classes: [ 'first', 'active' ]
    },
    {
        label: 'works',
        url: '/works'
    },
    {
        label: 'contact',
        url: '/contact'
    }
]} />, document.getElementById('header'));
