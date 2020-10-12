import React from "react";
import { Alert } from "react-bootstrap";

const mensage = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

mensage.defaultProps = {
  variant: "infor",
};

export default mensage;
