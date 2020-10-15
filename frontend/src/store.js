import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productoListaReducer,
  productoDetalleReducer,
} from "./reducers/productoReducers.js";
import { cestaReducer } from "./reducers/cestaReducers";
import { usuarioLoginReducer } from "./reducers/usuarioReducers";

const reducer = combineReducers({
  productoLista: productoListaReducer,
  productoDetalle: productoDetalleReducer,
  cesta: cestaReducer,
  usuarioLogin: usuarioLoginReducer,
});

const cestaItemsFromStorage = localStorage.getItem("cestaItems")
  ? JSON.parse(localStorage.getItem("cestaItems"))
  : [];

const usuarioInfoFromStorage = localStorage.getItem("usuarioInfo")
  ? JSON.parse(localStorage.getItem("usuarioInfo"))
  : null;

const estadoInicial = {
  cesta: {
    cestaItems: cestaItemsFromStorage,
  },
  usuarioLogin: { usuarioInfo: usuarioInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  estadoInicial,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
