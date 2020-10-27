import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productoListaReducer,
  productoDetalleReducer,
} from "./reducers/productoReducers.js";
import { cestaReducer } from "./reducers/cestaReducers";
import {
  usuarioLoginReducer,
  usuarioRegristrarReducer,
  usuarioDetallesReducer,
  usuarioActualizarPerfilReducer,
} from "./reducers/usuarioReducers";

import { crearPedidoReducer } from "./reducers/pedidoReducers";

const reducer = combineReducers({
  productoLista: productoListaReducer,
  productoDetalle: productoDetalleReducer,
  cesta: cestaReducer,
  usuarioLogin: usuarioLoginReducer,
  usuarioRegistrar: usuarioRegristrarReducer,
  usuarioDetalles: usuarioDetallesReducer,
  usuarioActualizarPerfil: usuarioActualizarPerfilReducer,
  crearPedido: crearPedidoReducer,
});

const cestaItemsFromStorage = localStorage.getItem("cestaItems")
  ? JSON.parse(localStorage.getItem("cestaItems"))
  : [];

const usuarioInfoFromStorage = localStorage.getItem("usuarioInfo")
  ? JSON.parse(localStorage.getItem("usuarioInfo"))
  : null;

const direccionEnvioFromStorage = localStorage.getItem("direccionEnvio")
  ? JSON.parse(localStorage.getItem("direccionEnvio"))
  : {};

const estadoInicial = {
  cesta: {
    cestaItems: cestaItemsFromStorage,
    direccionEnvio: direccionEnvioFromStorage,
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
