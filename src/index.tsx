import * as React from 'react';
import { render } from 'react-dom';

import Header from './header/header';

render(<Header tabs={[
    {
        label: 'one',
        url: '/about',
        classes: [ 'first' ]
    },
    {
        label: 'two',
        url: '/works'
    },
    {
        label: 'three',
        url: '/contact'
    }
]} />, document.getElementById('wrapper'));
