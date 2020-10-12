import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Producto from "../components/Producto";
import { listaProductos } from "../actions/productoActions";
import Loader from "../components/Loader";
import Mensaje from "../components/Mensaje";

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
        <Loader />
      ) : error ? (
        <Mensaje variant="danger">{error}</Mensaje>
      ) : (
        <Row>
          {productos.map((producto) => (
            <Col key={producto._id} sm={12} md={6} lg={4} xl={3}>
              <Producto producto={producto} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
