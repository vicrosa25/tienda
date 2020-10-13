import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productoListaReducer,
  productoDetalleReducer,
} from "./reducers/productoReducers.js";
import { cestaReducer } from "./reducers/cestaReducers";

const reducer = combineReducers({
  productoLista: productoListaReducer,
  productoDetalle: productoDetalleReducer,
  cesta: cestaReducer,
});

const cestaItemsFromStorage = localStorage.getItem("cestaItems")
  ? JSON.parse(localStorage.getItem("cestaItems"))
  : [];

const estadoInicial = {
  cesta: {
    cestaItems: cestaItemsFromStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  estadoInicial,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
