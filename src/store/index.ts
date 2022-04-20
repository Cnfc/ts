import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

export type AppDispatch = typeof store.dispatch;
export type RootReducer = ReturnType<typeof rootReducer>;

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// REDUX TOOLKIT
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });
};
