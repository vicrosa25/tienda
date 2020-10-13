import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { agregarItem } from "../actions/cestaActions";

const CestaScreen = ({ match, location }) => {
  const productoId = match.params.id;
  console.log(productoId);
  const cantidad = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productoId) {
      dispatch(agregarItem(productoId, cantidad));
    }
  }, [dispatch, productoId, cantidad]);

  return (
    <div>
      <h1>Cesta</h1>
    </div>
  );
};

export default CestaScreen;
