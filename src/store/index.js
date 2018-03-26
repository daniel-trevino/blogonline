import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "../reducers"; // the value from combineReducers

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  blacklist: ["isNavOpen"]
};

const perReducer = persistReducer(persistConfig, rootReducer);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store =
  process.env.REACT_APP_HOST_ENV === "production"
    ? createStore(perReducer)
    : createStore(
        perReducer,
        {},
        composeEnhancers(applyMiddleware(createLogger()))
      );
export const persistor = persistStore(store);
