import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '#/reducers';

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                {children}
            </Provider>
        </React.StrictMode>
    )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, {
    wrapper: Wrapper,
    ...options
})

export * from '@testing-library/react'
export { customRender as render }