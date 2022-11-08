import {createStore, applyMiddleware} from "@reduxjs/toolkit";
import {logger} from "firebase-tools/lib/logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
