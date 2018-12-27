import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GlobalStyle } from './style';

const Jianshu = (
    <Fragment>
        <GlobalStyle />
        <App />
    </Fragment>
);

ReactDOM.render(Jianshu, document.getElementById('root'));

