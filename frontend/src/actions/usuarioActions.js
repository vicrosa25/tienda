import axios from "axios";
import {
  USUARIO_LOGIN_EXITO,
  USUARIO_LOGIN_REQUEST,
  USUARIO_LOGIN_ERROR,
  USUARIO_LOGOUT,
  USUARIO_REGISTRAR_REQUEST,
  USUARIO_REGISTRAR_EXITO,
  USUARIO_REGISTRAR_ERROR,
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
