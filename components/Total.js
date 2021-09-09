import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Badge, Button, Toast} from "react-bootstrap";
import {addToast} from "../redux/toasts";
import {clearCart} from "../redux/cart";

export default function Total() {
    const sum = useSelector(state => state.catalog.
    filter(value => state.cart[value.id]).reduce((acc, value) => acc + value.price * state.cart[value.id], 0))
    const dispatch = useDispatch()
    return <p className="fs-3 mt-5 fw-light">
        Сумма заказа: <span className="fw-normal">{sum} Руб.</span>
        <Button className="float-end"
                onClick={() => {
                    dispatch(addToast({
                        title: "Поздравляем!",
                        text: `Заказ на сумму: ${sum} руб. оформлен`,
                        bg: "success"
                    }))
                    dispatch(clearCart())
                }}>
            Оформить заказ
        </Button>
    </p>
}