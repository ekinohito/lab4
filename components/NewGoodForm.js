import React, {useState} from 'react'
import {Button, Form} from "react-bootstrap";
import {addGood} from "../redux/catalog";
import {useDispatch, useSelector} from "react-redux";

export default function NewGoodForm() {
    const [price, setPrice] = useState(1000)
    const [name, setName] = useState("")
    const isUnique = useSelector(state => state.catalog.
    map(value => value.name !== name).
    reduce((acc, value) => acc && value, true))
    const dispatch = useDispatch()
    const setIfValid = (newPrice) => setPrice(isNaN(parseInt(newPrice))?price:parseInt(newPrice))
    return <Form>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Название товара</Form.Label>
            <Form.Control type="text" placeholder="Название товара" value={name} onChange={event => setName(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
            <Form.Label>Цена товара</Form.Label>
            <Form.Control type="number" placeholder="Цена товара" value={price} onChange={event => setIfValid(event.target.value)}/>
            <Form.Range value={price} min={0} max={10000} onChange={event => setIfValid(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" disabled={name === "" || !isUnique} onClick={() => {dispatch(addGood({name, price})); setPrice(1000); setName("")}}>
            Добавить товар
        </Button>
    </Form>
}