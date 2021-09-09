import React from 'react';
import {Container,} from "react-bootstrap";

export default function Empty() {
    return <Container>
        <p className="fs-1 text-center text-black-50"><i className="bi-box-seam"/><span className="mx-3"/>Пока тут пусто...</p>
    </Container>

}