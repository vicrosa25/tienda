import axios from "axios";
import {
  CESTA_AGREGAR_ITEM,
  CESTA_ELIMINAR_ITEM,
  CESTA_GUARDAR_DIRECCION_ENVIO,
  CESTA_GUARDAR_METODO_PAGO,
} from "../constantes/cestaConstantes";

export const agregarItem = (id, cantidad) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/productos/${id}`);

  dispatch({
    type: CESTA_AGREGAR_ITEM,
    payload: {
      producto: data._id,
      nombre: data.nombre,
      imagen: data.imagen,
      precio: data.precio,
      numEnAlmacen: data.numEnAlmacen,
      cantidad,
    },
  });

  localStorage.setItem(
    "cestaItems",
    JSON.stringify(getState().cesta.cestaItems)
  );
};

export const eliminarItem = (id) => (dispatch, getState) => {
  dispatch({
    type: CESTA_ELIMINAR_ITEM,
    payload: id,
  });

  localStorage.setItem(
    "cestaItems",
    JSON.stringify(getState().cesta.cestaItems)
  );
};

export const guardarDireccionEnvio = (data) => (dispatch) => {
  dispatch({
    type: CESTA_GUARDAR_DIRECCION_ENVIO,
    payload: data,
  });
  localStorage.setItem("direccionEnvio", JSON.stringify(data));
};

export const guardarMetodoPago = (data) => (dispatch) => {
  dispatch({
    type: CESTA_GUARDAR_METODO_PAGO,
    payload: data,
  });
  localStorage.setItem("metodoPago", JSON.stringify(data));
};
