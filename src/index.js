import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider} from '@material-ui/core/styles'
import {lightTheme} from './config/themes'

ReactDOM.render(<MuiThemeProvider theme={lightTheme}><App /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
