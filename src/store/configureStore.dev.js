import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise";
import reducer from "../reducers";

export default function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(promise))
  );
  return store;
}
