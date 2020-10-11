import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listaProductos } from "../actions/productoActions";

const Home = () => {
  const dispatch = useDispatch();

  const productoLista = useSelector((state) => state.productoLista);
  const { loading, error, productos } = productoLista;

  useEffect(() => {
    dispatch(listaProductos());
  }, [dispatch]);

  return (
    <>
      <h1>Ultimos Productos</h1>

      {loading ? (
        <h2>Cargnado...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {productos.map((producto) => (
            <Col key={producto._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={producto} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
