import axios from "axios";
import {
  CREAR_PEDIDO_REQUEST,
  CREAR_PEDIDO_EXITO,
  CREAR_PEDIDO_FALLO,
} from "../constantes/pedidoConstantes";

export const crearPedido = (pedido) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREAR_PEDIDO_REQUEST,
    });

    const {
      usuarioLogin: { usuarioInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usuarioInfo.token}`,
      },
    };

    console.log(pedido);
    const { data } = await axios.post("/api/pedidos", pedido, config);

    dispatch({
      type: CREAR_PEDIDO_EXITO,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREAR_PEDIDO_FALLO,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
