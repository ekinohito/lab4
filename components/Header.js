import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Header() {
    const router = useRouter()
    return <Navbar bg="light">
        <Container >
            <Navbar.Brand href="/">Мой интернет-магазин</Navbar.Brand>
            <Nav>
                <Link href="/" passHref><Nav.Link active={router.route === '/'}>
                    <i className="bi-shop-window"/> Каталог</Nav.Link></Link>
                <Link href="/cart" passHref><Nav.Link active={router.route === '/cart'}>
                    <i className="bi-cart"/> Корзина</Nav.Link></Link>
            </Nav>
        </Container>
    </Navbar>
}