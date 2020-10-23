import {
  CESTA_AGREGAR_ITEM,
  CESTA_ELIMINAR_ITEM,
  CESTA_GUARDAR_DIRECCION_ENVIO,
} from "../constantes/cestaConstantes";

export const cestaReducer = (
  state = { cestaItems: [], direccionEnvio: {} },
  action
) => {
  switch (action.type) {
    case CESTA_AGREGAR_ITEM:
      const item = action.payload;

      const existeItem = state.cestaItems.find((x) => x.id === item.id);

      if (existeItem) {
        return {
          ...state,
          cestaItems: state.cestaItems.map((x) =>
            x.id === item.id ? item : x
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
          (producto) => producto.id !== action.payload
        ),
      };

    case CESTA_GUARDAR_DIRECCION_ENVIO:
      return {
        ...state,
        direccionEnvio: action.payload,
      };

    default:
      return state;
  }
};
