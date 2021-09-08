import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Button, Table} from "react-bootstrap";
import {addItem, removeItem} from "../redux/cart";

export default function CartTable() {
    const cart = useSelector(state => state.cart)
    const catalog = useSelector(state => state.catalog)
    const dispatch = useDispatch()
    return <Table>
        <thead>
        <tr>
            <th>#</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
        </tr>
        </thead>
        <tbody>
        {catalog.filter(value => cart[value.id]).map((value, index) => <tr key={value.id}>
            <th>{index + 1}</th>
            <td>{value.name}</td>
            <td><span>{value.price}</span></td>
            <td>
                <Button
                    variant="outline-dark"
                    className="rounded-pill py-1 px-2 m-1 my-sm-0"
                    onClick={() => dispatch(removeItem(value.id))}>
                    <i className={"bi-dash"}/>
                </Button>
                <span className="px-1">{cart[value.id]}</span>
                <Button
                    variant="outline-dark"
                    className="rounded-pill py-1 px-2 m-1 my-sm-0"
                    onClick={() => dispatch(addItem(value.id))}>
                    <i className={"bi-plus"}/>
                </Button>
            </td>
        </tr>)}
        </tbody>
    </Table>
}