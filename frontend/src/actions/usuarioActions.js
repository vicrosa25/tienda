import axios from "axios";
import {
  USUARIO_LOGIN_EXITO,
  USUARIO_LOGIN_REQUEST,
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

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USUARIO_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/usuarios/login",
      { email, password },
      config
    );

    dispatch({
      type: USUARIO_LOGIN_EXITO,
      payload: data,
    });

    localStorage.setItem("usuarioInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USUARIO_LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("usuarioInfo");
  dispatch({ type: USUARIO_LOGOUT });
};

export const registrar = (nombre, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USUARIO_REGISTRAR_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/usuarios",
      { nombre, email, password },
      config
    );

    dispatch({
      type: USUARIO_REGISTRAR_EXITO,
      payload: data,
    });

    dispatch({
      type: USUARIO_LOGIN_EXITO,
      payload: data,
    });

    localStorage.setItem("usuarioInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USUARIO_REGISTRAR_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUsuarioDetalles = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USUARIO_DETALLES_REQUEST,
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

    const { data } = await axios.get(`/api/usuarios/${id}`, config);

    dispatch({
      type: USUARIO_DETALLES_EXITO,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USUARIO_DETALLES_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const actualizarPerfilUsuario = (usuario) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USUARIO_ACTUALIZAR_PERFIL_REQUEST,
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

    const { data } = await axios.put("/api/usuarios/perfil", usuario, config);

    dispatch({
      type: USUARIO_ACTUALIZAR_PERFIL_EXITO,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USUARIO_ACTUALIZAR_PERFIL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
