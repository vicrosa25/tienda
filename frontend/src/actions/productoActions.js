import axios from "axios";

import {
  PRODUCTO_LISTA_REQUEST,
  PRODUCTO_LISTA_EXITO,
  PRODUCTO_LISTA_ERROR,
  PRODUCTO_DETALLE_REQUEST,
  PRODUCTO_DETALLE_EXITO,
  PRODUCTO_DETALLE_ERROR,
} from "../constantes/productoConstantes.js";

export const listaProductos = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTO_LISTA_REQUEST });

    const { data } = await axios.get("/api/productos");

    dispatch({
      type: PRODUCTO_LISTA_EXITO,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTO_LISTA_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detalleProducto = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTO_DETALLE_REQUEST });

    const { data } = await axios.get(`/api/productos/${id}`);

    dispatch({
      type: PRODUCTO_DETALLE_EXITO,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTO_DETALLE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
