import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enableBatching } from 'redux-batched-actions';
import reduxPromise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from "./modules";

const middleware = [thunk, reduxPromise];

export const store = createStore(enableBatching(reducers), composeWithDevTools(
    applyMiddleware(...middleware)
));
