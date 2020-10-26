import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import Mensaje from "../components/Mensaje";
import CompruebaPasos from "../components/CompruebaPasos";

const RealizarPedidoScreen = () => {
  const cesta = useSelector((state) => state.cesta);

  // Para que todos los precios tengan dos decimales
  const decimales = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  // Calcula los precios, impuestos, gastos de envio, precio total
  cesta.precioItems = decimales(
    cesta.cestaItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  );
  cesta.gastosEnvio = decimales(cesta.precioItems > 100 ? 0 : 10);
  cesta.impuestos = decimales(Number((0.21 * cesta.precioItems).toFixed(2)));

  cesta.precioTotal = (
    Number(cesta.precioItems) +
    Number(cesta.gastosEnvio) +
    Number(cesta.impuestos)
  ).toFixed(2);

  const realizarPedidoHandler = () => {
    console.log("pedido");
  };

  return (
    <>
      <CompruebaPasos paso1 paso2 paso3 paso4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cesta.direccionEnvio.direccion}, {cesta.direccionEnvio.ciudad},{" "}
                {cesta.direccionEnvio.codigoPosta}, {cesta.direccionEnvio.pais}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method:</strong>
              {cesta.metodoPago}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cesta.cestaItems.length === 0 ? (
                <Mensaje>Your cart is empty</Mensaje>
              ) : (
                <ListGroup variant="flush">
                  {cesta.cestaItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.imagen}
                            alt={item.nombre}
                            fluid
                            rounded
                          />{" "}
                        </Col>
                        <Col>
                          <Link to={`/productos/${item.id}`}>
                            {item.nombre}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.cantidad} x {item.precio}€ ={" "}
                          {item.cantidad * item.precio}€
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>{cesta.precioItems} €</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>{cesta.gastosEnvio} €</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>{cesta.impuestos} €</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>{cesta.precioTotal} €</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cesta.cestaItems === 0}
                  onClick={realizarPedidoHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RealizarPedidoScreen;
