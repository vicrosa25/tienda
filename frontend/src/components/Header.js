import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/usuarioActions";

const Header = () => {
  // Hooks
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const usuarioLogin = useSelector((state) => state.usuarioLogin);
  const { usuarioInfo } = usuarioLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Joyería Reina</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cesta">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> {t("header.cart")}
                </Nav.Link>
              </LinkContainer>

              {usuarioInfo ? (
                <NavDropdown title={usuarioInfo.nombre} id="nombreUsuario">
                  <LinkContainer to="/perfil">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign in
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
