import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GlobalStyle, GlobalIconFont } from './style';

const Jianshu = (
    <Fragment>
        <App />
        <GlobalStyle />
        <GlobalIconFont />
    </Fragment>
);

ReactDOM.render(Jianshu, document.getElementById('root'));

