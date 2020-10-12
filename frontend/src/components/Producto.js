import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ producto }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/productos/${producto._id}`}>
        <Card.Img src={producto.imagen} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/productos/${producto._id}`}>
          <Card.Title as="div">
            <strong>{producto.nombre}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={producto.valoracionMedia}
            text={` ${producto.numeroValoraciones} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${producto.precio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
