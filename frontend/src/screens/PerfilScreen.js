import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Mensaje from "../components/Mensaje";
import Loader from "../components/Loader";
import {
  getUsuarioDetalles,
  actualizarPerfilUsuario,
} from "../actions/usuarioActions";

const PerfilScreen = ({ location, history }) => {
  // Hooks
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const dispatch = useDispatch();

  const usuarioDetalles = useSelector((state) => state.usuarioDetalles);
  const { loading, error, usuario } = usuarioDetalles;

  const usuarioLogin = useSelector((state) => state.usuarioLogin);
  const { usuarioInfo } = usuarioLogin;

  const usuarioActualizarPerfil = useSelector(
    (state) => state.usuarioActualizarPerfil
  );
  const { exito } = usuarioActualizarPerfil;

  // Redirecciona al home una vez logeado
  useEffect(() => {
    if (!usuarioInfo) {
      history.push("/login");
    } else {
      if (!usuario.nombre) {
        dispatch(getUsuarioDetalles("perfil"));
      } else {
        setNombre(usuario.nombre);
        setEmail(usuario.email);
      }
    }
  }, [history, dispatch, usuarioInfo, usuario]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmarPassword) {
      setMensaje("La contraseña no coincide");
    } else {
      dispatch(
        actualizarPerfilUsuario({
          id: usuario._id,
          nombre,
          email,
          password,
        })
      );
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {mensaje && <Mensaje variant="danger">{mensaje}</Mensaje>}
        {error && <Mensaje variant="danger">{error}</Mensaje>}
        {exito && <Mensaje variant="success">Profile Updated</Mensaje>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          {/* Nombre */}
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="nombre"
              placeholder="Escribe tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="email">
            <Form.Label>Email Address </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* confirmPassword */}
          <Form.Group controlId="confirmPassword">
            <Form.Label>Conforma el Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmarPassword}
              onChange={(e) => setConfirmarPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* Button */}
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My orders</h2>
      </Col>
    </Row>
  );
};

export default PerfilScreen;
