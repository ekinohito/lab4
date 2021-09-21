import React from 'react'
import {Badge, Toast, ToastContainer} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {removeToast} from "../redux/toasts";

export default function Toaster() {
    const toasts = useSelector(state => state.toasts)
    const dispatch = useDispatch()
    return <ToastContainer position="bottom-end">
        {toasts.map((value, index) =>
            <Toast key={index} onClose={() => dispatch(removeToast(index))} animation>
                <Toast.Header><h4><Badge bg={value.bg}>{value.title}</Badge></h4></Toast.Header>
                <Toast.Body><p className="fs-4">{value.text}</p></Toast.Body>
            </Toast>)}
    </ToastContainer>
}
