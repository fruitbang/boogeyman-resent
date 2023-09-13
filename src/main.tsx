import { AppThemeProvider } from './themes/AppThemeProvider';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import React from 'react';
import App from './App';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

if (process.env.NODE_ENV === 'development') {
    // @ts-ignore
    import('../mocks/browser')
        .then(({ worker }) => {
            worker.start();
        })
        .then(() => {
            root.render(
                <React.StrictMode>
                    <Provider store={store}>
                        <AppThemeProvider>
                            <App />
                        </AppThemeProvider>
                    </Provider>
                </React.StrictMode>
            );
        });
} else {
    root.render(
        <Provider store={store}>
            <AppThemeProvider>
                <App />
            </AppThemeProvider>
        </Provider>
    );
}
