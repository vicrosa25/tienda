import {
  PRODUCTO_LISTA_REQUEST,
  PRODUCTO_LISTA_EXITO,
  PRODUCTO_LISTA_ERROR,
  PRODUCTO_DETALLE_REQUEST,
  PRODUCTO_DETALLE_EXITO,
  PRODUCTO_DETALLE_ERROR,
} from "../constantes/productoConstantes.js";

export const productoListaReducer = (state = { productos: [] }, action) => {
  switch (action.type) {
    case PRODUCTO_LISTA_REQUEST:
      return { loading: true, productos: [] };
    case PRODUCTO_LISTA_EXITO:
      return { loading: false, productos: action.payload };
    case PRODUCTO_LISTA_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productoDetalleReducer = (
  state = { producto: { valoraciones: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCTO_DETALLE_REQUEST:
      return { loading: true, producto: {} };
    case PRODUCTO_DETALLE_EXITO:
      return { loading: false, producto: action.payload };
    case PRODUCTO_DETALLE_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
