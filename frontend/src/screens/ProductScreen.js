import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Mensaje from "../components/Mensaje";
import { detalleProducto } from "../actions/productoActions";

const ProductScreen = ({ history, match }) => {
  // Hooks
  const [t] = useTranslation();
  const [cantidad, setCantidad] = useState(1);
  const dispatch = useDispatch();

  const productoDetalle = useSelector((state) => state.productoDetalle);
  const { loading, error, producto } = productoDetalle;

  useEffect(() => {
    dispatch(detalleProducto(match.params.id));
  }, [dispatch, match]);

  const addCestaHandler = () => {
    history.push(`/cesta/${match.params.id}?cantidad=${cantidad}`);
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        {t("cartScreen.goBack")}
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Mensaje variant="danger">{error}</Mensaje>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={producto.imagen} alt={producto.nombre} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{producto.nombre}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={producto.valoracionMedia}
                  text={` ${producto.numeroValoraciones} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>{producto.precio}€</ListGroup.Item>
              <ListGroup.Item>{producto.descripcion}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>{t("productScreen.price")}</Col>
                    <Col>{producto.precio}€</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>{t("productScreen.status")}</Col>
                    <Col>
                      {producto.numEnAlmacen > 0
                        ? t("productScreen.inStock")
                        : t("productScreen.outStock")}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {producto.numEnAlmacen > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>{t("productScreen.quantity")}</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={cantidad}
                          onChange={(e) => setCantidad(e.target.value)}
                        >
                          {[...Array(producto.numEnAlmacen).keys()].map(
                            (num) => (
                              <option key={num + 1} value={num + 1}>
                                {num + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addCestaHandler}
                    className="btn-block"
                    type="button"
                    disabled={producto.numEnAlmacen === 0}
                  >
                    {t("productScreen.addItem")}
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
