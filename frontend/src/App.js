import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import ProductScreen from "./screens/ProductScreen";
import CestaScreen from "./screens/CestaScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrarScreen from "./screens/RegistrarScreen";
import TramitarScreen from "./screens/TramitarScreen";
import PagoScreen from "./screens/PagoScreen";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/tramitar" component={TramitarScreen} />
          <Route path="/pago" component={PagoScreen} />
          <Route path="/registrar" component={RegistrarScreen} />
          <Route path="/productos/:id" component={ProductScreen} />
          <Route path="/cesta/:id?" component={CestaScreen} />
          <Route path="/" component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
