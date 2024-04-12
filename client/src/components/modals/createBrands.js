import React from "react";
import { Button, Form, Modal, ModalHeader } from "react-bootstrap";

const CreateBrand = ({show, onHide}) => {
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
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;