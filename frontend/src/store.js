import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { productoListaReducer } from "./reducers/productoReducers.js";

const reducer = combineReducers({
  productoLista: productoListaReducer,
});
const estadoInicial = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  estadoInicial,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
