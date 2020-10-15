import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Mensaje from "../components/Mensaje";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/usuarioActions";

const LoginScreen = ({ location, history }) => {
  // Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const usuarioLogin = useSelector((state) => state.usuarioLogin);

  const { loading, error, usuarioInfo } = usuarioLogin;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  // Redirecciona al home una vez logeado
  useEffect(() => {
    if (usuarioInfo) {
      history.push(redirect);
    }
  }, [history, usuarioInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <FormContainer>
      <h1>Sign in</h1>
      {error && <Mensaje variant="danger">{error}</Mensaje>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
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

        {/* Button */}
        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form>

      {/* Link para registrarse */}
      <Row className="py-3">
        <Col>
          New customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
