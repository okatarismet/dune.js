import { AppProps } from 'next/app';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '../store/index';

import { materialTheme } from '../lib/theme';
import React from 'react';
import Navbar from '../components/Navbar'

declare module '@mui/styles/defaultTheme' {
    interface DefaultTheme extends Theme { }
}
const isServerSideRendered = () => {
    return typeof window === 'undefined';
};

if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
    import('react-dom').then((ReactDOM) => {
        import('@axe-core/react').then((axe) => {
            axe.default(React, ReactDOM, 1000, {});
        });
    });
}

const App = ({ Component, pageProps }: AppProps) => {

    return (
        <StyledEngineProvider injectFirst>
            <Provider store={store}>
                <ThemeProvider theme={materialTheme}>
                    <Navbar />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </StyledEngineProvider>
    );
};
const makeStore = () => store;

export default withRedux(makeStore)(App);
