import { CESTA_AGREGAR_ITEM } from "../constantes/cestaConstantes";

export const cestaReducer = (state = { cestaItems: [] }, action) => {
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

    default:
      return state;
  }
};
