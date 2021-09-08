import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";

export default function Header() {
    return <Navbar bg="light">
        <Container >
            <Navbar.Brand href="/">Мой интернет-магазин</Navbar.Brand>
            <Nav>
                <Nav.Link><i className="bi-shop-window"/> Каталог</Nav.Link>
                <Nav.Link><i className="bi-cart"/> Корзина</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}