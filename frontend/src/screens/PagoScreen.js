import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CompruebaPasos from "../components/CompruebaPasos";
import { guardarMetodoPago } from "../actions/cestaActions";

const PagoScreen = ({ history }) => {
  // Redux Hooks
  const direccionEnvio = useSelector((state) => state.cesta.direccionEnvio);
  const dispatch = useDispatch();

  if (!direccionEnvio) {
    history.push("/tramitar");
  }

  // React Hooks
  const [metodoPago, setMetodoPago] = useState("Paypal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(guardarMetodoPago(metodoPago));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CompruebaPasos paso1 paso2 paso3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        {/* Metodo de Pago */}
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="Paypal"
              name="metodoPago"
              value="Paypal"
              checked
              onChange={(e) => setMetodoPago(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        {/* Button */}
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PagoScreen;
