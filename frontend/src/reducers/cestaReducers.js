import {
  CESTA_AGREGAR_ITEM,
  CESTA_ELIMINAR_ITEM,
  CESTA_GUARDAR_DIRECCION_ENVIO,
  CESTA_GUARDAR_METODO_PAGO,
} from "../constantes/cestaConstantes";

export const cestaReducer = (
  state = { cestaItems: [], direccionEnvio: {} },
  action
) => {
  switch (action.type) {
    case CESTA_AGREGAR_ITEM:
      const item = action.payload;

      const existeItem = state.cestaItems.find(
        (x) => x.producto === item.producto
      );

      if (existeItem) {
        return {
          ...state,
          cestaItems: state.cestaItems.map((x) =>
            x.producto === item.producto ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cestaItems: [...state.cestaItems, item],
        };
      }

    case CESTA_ELIMINAR_ITEM:
      return {
        ...state,
        cestaItems: state.cestaItems.filter(
          (x) => x.producto !== action.payload
        ),
      };

    case CESTA_GUARDAR_DIRECCION_ENVIO:
      return {
        ...state,
        direccionEnvio: action.payload,
      };

    case CESTA_GUARDAR_METODO_PAGO:
      return {
        ...state,
        metodoPago: action.payload,
      };

    default:
      return state;
  }
};
