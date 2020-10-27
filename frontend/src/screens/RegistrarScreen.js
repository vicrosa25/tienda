import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Mensaje from "../components/Mensaje";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { registrar } from "../actions/usuarioActions";

const RegistrarScreen = ({ location, history }) => {
  // Hooks
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const dispatch = useDispatch();
  const usuarioRegistrar = useSelector((state) => state.usuarioRegistrar);
  const { loading, error, usuarioInfo } = usuarioRegistrar;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  // Redirecciona al home una vez logeado
  useEffect(() => {
    if (usuarioInfo) {
      history.push(redirect);
    }
  }, [history, usuarioInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmarPassword) {
      setMensaje("La contraseña no coincide");
    } else {
      dispatch(registrar(nombre, email, password));
    }
  };
  return (
    <FormContainer>
      <h1>Sign in</h1>
      {mensaje && <Mensaje variant="danger">{mensaje}</Mensaje>}
      {error && <Mensaje variant="danger">{error}</Mensaje>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        {/* Nombre */}
        <Form.Group controlId="nombre">
          <Form.Label>nombre</Form.Label>
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
          Sign in
        </Button>
      </Form>

      {/* Link para registrarse */}
      <Row className="py-3">
        <Col>
          New customer?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegistrarScreen;
