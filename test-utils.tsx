// https://testing-library.com/docs/react-testing-library/setup/

import React from 'react';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { materialTheme } from './lib/theme';
import { Provider } from 'react-redux';
import store from './store/index';

export * from '@testing-library/react';

// https://github.com/vercel/next.js/issues/7479#issuecomment-659859682
// --------------------------------------------------
// Override the default test render with our own
//
// You can override the router mock like this:
//
// const { baseElement } = render(<MyComponent />, {
//   router: { pathname: '/my-custom-pathname' },
// });
// --------------------------------------------------
type DefaultParams = Parameters<typeof render>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

const mockRouter: NextRouter = {
    basePath: '',
    isReady: true,
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isPreview: false,
};

// Where you add your providers for mock testing wrapper
export function customRender(ui: RenderUI, { wrapper, router, ...options }: RenderOptions = {}) {
    wrapper = ({ children }) => (
        <StyledEngineProvider injectFirst>
            <Provider store={store}>

                <ThemeProvider theme={materialTheme}>
                    <RouterContext.Provider value={{ ...mockRouter, ...router }}>{children}</RouterContext.Provider>
                </ThemeProvider>
            </Provider>
        </StyledEngineProvider>
    );

    return render(ui, { wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
