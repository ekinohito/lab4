import React from 'react'
import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteGood} from "../redux/catalog";
import {addItem} from "../redux/cart";
import Cell from "./Cell";

export default function CatalogTable() {
    const cart = useSelector(state => state.cart)
    const catalog = useSelector(state => state.catalog)
    const dispatch = useDispatch()
    return <Table>
        <thead>
        <tr>
            <th>#</th>
            <th>Название</th>
            <th>Цена</th>
            <th/>
        </tr>
        </thead>
        <tbody>
        {catalog.map((value, index) => <tr key={value.id}>
            <th>{index + 1}</th>
            <Cell>{value.name}</Cell>
            <Cell><span>{value.price}</span></Cell>
            <td>
                <Button
                    variant={cart[value.id]?"outline-dark":"outline-primary"}
                    disabled={cart[value.id]}
                    className="rounded-pill m-1 my-sm-0"
                    onClick={() => dispatch(addItem(value.id))}>
                    {cart[value.id]?<><i className={"bi-cart-check"}/> В корзине</>:<><i className={"bi-cart"}/> В корзину</>}
                </Button>
                <Button
                    variant="danger"
                    className="m-1 my-sm-0"
                    onClick={() => dispatch(deleteGood({index, id: value.id}))}>
                    <i className="bi-trash"/> Из каталога
                </Button>
            </td>
        </tr>)}
        </tbody>
    </Table>
}