import {
  PRODUCTO_LISTA_REQUEST,
  PRODUCTO_LISTA_EXITO,
  PRODUCTO_LISTA_ERROR,
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
