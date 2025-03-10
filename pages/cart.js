import React from 'react'
import Head from "next/head";
import Header from "../components/Header";
import {Container, ToastContainer} from "react-bootstrap";
import CartTable from "../components/CartTable";
import {useSelector} from "react-redux";
import Empty from "../components/Empty";
import Total from "../components/Total";
import Toaster from "../components/Toaster";

export default function Cart() {
    const isEmpty = useSelector(state => Object.keys(state.cart).length <= 0)
    return <>
        <Head>
            <title>Корзина</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <Toaster/>
        <Container>
            <main>
                <h1 className="mb-5">Корзина</h1>
                {isEmpty?<Empty/>:<><CartTable/><Total/></>}
            </main>
        </Container>
    </>
}
