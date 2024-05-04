import React from "react";
import { Button, Form, Modal, ModalHeader } from "react-bootstrap";
import { useState } from "react";
import { createBrand } from "../../http/gameApi";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <ModalHeader closeButton>
                <Modal.Title id='container-modal-title-vcenter'>
                    Добавить тип
                </Modal.Title>
            </ModalHeader>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;