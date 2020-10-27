import {
  USUARIO_LOGIN_REQUEST,
  USUARIO_LOGIN_EXITO,
  USUARIO_LOGIN_ERROR,
  USUARIO_LOGOUT,
  USUARIO_REGISTRAR_REQUEST,
  USUARIO_REGISTRAR_EXITO,
  USUARIO_REGISTRAR_ERROR,
  USUARIO_DETALLES_REQUEST,
  USUARIO_DETALLES_EXITO,
  USUARIO_DETALLES_ERROR,
  USUARIO_ACTUALIZAR_PERFIL_REQUEST,
  USUARIO_ACTUALIZAR_PERFIL_EXITO,
  USUARIO_ACTUALIZAR_PERFIL_ERROR,
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

export const usuarioRegristrarReducer = (state = {}, action) => {
  switch (action.type) {
    case USUARIO_REGISTRAR_REQUEST:
      return { loading: true };
    case USUARIO_REGISTRAR_EXITO:
      return { loading: false, usuarioInfo: action.payload };
    case USUARIO_REGISTRAR_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const usuarioDetallesReducer = (state = { usuario: {} }, action) => {
  switch (action.type) {
    case USUARIO_DETALLES_REQUEST:
      return { ...state, loading: true };
    case USUARIO_DETALLES_EXITO:
      return { loading: false, usuario: action.payload };
    case USUARIO_DETALLES_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const usuarioActualizarPerfilReducer = (state = {}, action) => {
  switch (action.type) {
    case USUARIO_ACTUALIZAR_PERFIL_REQUEST:
      return { loading: true };
    case USUARIO_ACTUALIZAR_PERFIL_EXITO:
      return { loading: false, exito: true, usuarioInfo: action.payload };
    case USUARIO_ACTUALIZAR_PERFIL_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
