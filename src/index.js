import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';

/*Components*/
import App from './components/App';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
    <HashRouter>
        {/*Scroll to top when routing*/}
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
