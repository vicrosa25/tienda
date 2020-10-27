import {
  CREAR_PEDIDO_EXITO,
  CREAR_PEDIDO_REQUEST,
  CREAR_PEDIDO_FALLO,
} from "../constantes/pedidoConstantes";

export const crearPedidoReducer = (state = {}, action) => {
  switch (action.type) {
    case CREAR_PEDIDO_REQUEST:
      return {
        loading: true,
      };
    case CREAR_PEDIDO_EXITO:
      return {
        loading: false,
        exito: true,
        pedido: action.payload,
      };
    case CREAR_PEDIDO_FALLO:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
