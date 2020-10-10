import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/productos/${product._id}`}>
        <Card.Img src={product.imagen} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/productos/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.nombre}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.valoracionMedia}
            text={` ${product.numeroValoraciones} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.precio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
