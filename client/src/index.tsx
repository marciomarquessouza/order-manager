import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { firebaseApp } from './services/firebase.service';
import { FIREBASE_CONFIG } from './config';

firebaseApp.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
