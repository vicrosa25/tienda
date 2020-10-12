import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Mensaje from "../components/Mensaje";
import { detalleProducto } from "../actions/productoActions";

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productoDetalle = useSelector((state) => state.productoDetalle);
  const { loading, error, producto } = productoDetalle;

  useEffect(() => {
    dispatch(detalleProducto(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
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
              <ListGroup.Item>${producto.precio}</ListGroup.Item>
              <ListGroup.Item>{producto.descripcion}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price</Col>
                    <Col>
                      <strong>{producto.precio}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {producto.numEnAlmacen > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={producto.numEnAlmacen === 0}
                  >
                    Add to Cart
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
