import React from 'react'
import {Badge, Container, Nav, Navbar} from "react-bootstrap";
import {useRouter} from "next/router";
import Link from "next/link";
import {useSelector} from "react-redux";

export default function Header() {
    const router = useRouter()
    const badge = useSelector(state => Object.entries(state.cart).reduce((acc, [, value]) => acc + value, 0))
    return <Navbar bg="light">
        <Container >
            <Navbar.Brand href="/">Мой интернет-магазин</Navbar.Brand>
            <Nav>
                <Link href="/" passHref><Nav.Link active={router.route === '/'}>
                    <i className="bi-shop-window"/> Каталог</Nav.Link></Link>
                <Link href="/cart" passHref><Nav.Link active={router.route === '/cart'}>
                    <i className="bi-cart"/> Корзина {badge > 0 && <Badge bg="info" pill>{badge}</Badge>}</Nav.Link></Link>
            </Nav>
        </Container>
    </Navbar>
}