import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Image,
  Form,
  Row,
  Col,
  ListGroup,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Mensaje from "../components/Mensaje";
import { agregarItem } from "../actions/cestaActions";

const CestaScreen = ({ match, location, history }) => {
  const productoId = match.params.id;
  const cantidad = location.search ? Number(location.search.split("=")[1]) : 1;

  // Hooks
  const dispatch = useDispatch();
  const cestaItems = useSelector((state) => state.cesta.cestaItems);
  const [t] = useTranslation();

  useEffect(() => {
    if (productoId) {
      dispatch(agregarItem(productoId, cantidad));
    }
  }, [dispatch, productoId, cantidad]);

  // Handlers
  const borraDeLaCestaHandler = (id) => {
    console.log(`remove ${id}`);
  };

  const pagarHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>{t("cartScreen.cart")}</h1>
        {cestaItems.length === 0 ? (
          <Mensaje>
            {t("cartScreen.message")}{" "}
            <Link to="/">{t("cartScreen.goBack")}</Link>
          </Mensaje>
        ) : (
          <ListGroup variant="flush">
            {cestaItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.imagen} alt={item.numbre} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/productos/${item.id}`}>{item.nombre}</Link>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.cantidad}
                      onChange={(e) =>
                        dispatch(agregarItem(item.id, Number(e.target.value)))
                      }
                    >
                      {[...Array(item.numEnAlmacen).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => borraDeLaCestaHandler(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal (
                {cestaItems.reduce((acc, item) => acc + item.cantidad, 0)})
                {t("cartScreen.items")}
              </h2>
              {cestaItems
                .reduce((acc, item) => acc + item.cantidad * item.precio, 0)
                .toFixed(2)}
              €
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cestaItems.length === 0}
                onClick={pagarHandler}
              >
                {t("cartScreen.checkout")}
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CestaScreen;
