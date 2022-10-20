import React from 'react';
import { createRoot } from "react-dom/client";
import App from './app';
import { Provider } from 'react-redux';
import store from './reducers';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as unknown as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)