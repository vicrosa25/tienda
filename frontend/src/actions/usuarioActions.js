import axios from "axios";
import {
  USUARIO_LOGIN_EXITO,
  USUARIO_LOGIN_REQUEST,
  USUARIO_LOGIN_ERROR,
  USUARIO_LOGOUT,
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
