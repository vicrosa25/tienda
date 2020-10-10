import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import ProductScreen from "./screens/ProductScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/productos/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
