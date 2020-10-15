import {
  USUARIO_LOGIN_REQUEST,
  USUARIO_LOGIN_EXITO,
  USUARIO_LOGIN_ERROR,
  USUARIO_LOGOUT,
} from "../constantes/usuarioConstantes";

export const usuarioLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USUARIO_LOGIN_REQUEST:
      return { loading: true };
    case USUARIO_LOGIN_EXITO:
      return { loading: false, usuarioInfo: action.payload };
    case USUARIO_LOGIN_ERROR:
      return { loading: false, error: action.payload };
    case USUARIO_LOGOUT:
      return {};
    default:
      return state;
  }
};
