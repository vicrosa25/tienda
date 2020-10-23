import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { guardarDireccionEnvio } from "../actions/cestaActions";

const TramitarScreen = ({ history }) => {
  // Redux Hooks
  const direccionEnvio = useSelector((state) => state.cesta.direccionEnvio);
  const dispatch = useDispatch();

  // React Hooks
  const [direccion, setDireccion] = useState(direccionEnvio.direccion);
  const [ciudad, setCiudad] = useState(direccionEnvio.ciudad);
  const [codigoPostal, setCodigoPostal] = useState(direccionEnvio.codigoPostal);
  const [pais, setPais] = useState(direccionEnvio.pais);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(guardarDireccionEnvio({ direccion, ciudad, codigoPostal, pais }));
    history.push("/pago");
  };

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        {/* Direccion */}
        <Form.Group controlId="direccion">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={direccion}
            required
            onChange={(e) => setDireccion(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Ciudad */}
        <Form.Group controlId="ciudad">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={ciudad}
            required
            onChange={(e) => setCiudad(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Codigo Postal */}
        <Form.Group controlId="codigoPostal">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={codigoPostal}
            required
            onChange={(e) => setCodigoPostal(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Pais */}
        <Form.Group controlId="pais">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={pais}
            required
            onChange={(e) => setPais(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Button */}
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default TramitarScreen;
