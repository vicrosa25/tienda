import React from 'react'
import {Nav} from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'


const CompruebaPasos = ({paso1, paso2, paso3, paso4}) => {
    return (
        <Nav className="justify-content-center mb-4">
            <Nav.Item>
                {paso1 ? (
                    <LinkContainer to ='/login'>
                        <Nav.Link>Sign in</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled>Sign in</Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {paso2 ? (
                    <LinkContainer to ='/tramitar'>
                        <Nav.Link>Shipping</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled>Shipping</Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {paso3 ? (
                    <LinkContainer to ='/pago'>
                        <Nav.Link>Payment</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled>Payment</Nav.Link>}
            </Nav.Item>
            <Nav.Item>
                {paso4 ? (
                    <LinkContainer to ='/placeorder'>
                        <Nav.Link>Place order</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link disabled>Place order</Nav.Link>}
            </Nav.Item>
        </Nav>
    )
}

export default CompruebaPasos
