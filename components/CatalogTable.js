import React from 'react'
import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteGood} from "../redux/catalog";
import {addItem} from "../redux/cart";

export default function CatalogTable() {
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
            <td>{value.name}</td>
            <td><span>{value.price}</span></td>
            <td className="float-end">
                <Button
                    variant="outline-dark"
                    className="rounded-pill m-1 my-sm-0"
                    onClick={() => dispatch(addItem(value.id))}>
                    <i className={"bi-cart"}/> В корзину
                </Button>
                <Button
                    variant="danger"
                    className="m-1 my-sm-0"
                    onClick={() => dispatch(deleteGood(index))}>
                    <i className="bi-trash"/> Из каталога
                </Button>
            </td>
        </tr>)}
        </tbody>
    </Table>
}