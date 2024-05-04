import React, { useContext, useState, useEffect } from "react";
import { Button, Col, Dropdown, Form, Modal, ModalHeader, Row } from "react-bootstrap";
import { Context } from "../..";
import { createGame, fetchBrands,fetchGames,fetchTypes } from "../../http/gameApi";
import { observer } from "mobx-react-lite";

const CreateGame = observer (({show, onHide}) => {
    const {game} = useContext(Context)
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)

    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => game.setTypes(data))
        fetchBrands().then(data => game.setBrands(data))
      }, [])

    const selectFile = (e) => {
        console.log(e.target.files)
        setFile(e.target.files[0])
    }
    const addInfo = () => {
        setInfo([...info, {title:'', description: '', number: Date.now()}])

    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))

    }
    const addGame = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', game.selectedType.id)
        formData.append('brandId', game.selectedBrand.id)
        formData.append('info', JSON.stringify(info))
        console.log(formData)
        createGame(formData).then(data => onHide())
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
                    Добавить игру
                </Modal.Title>
            </ModalHeader>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{game.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.types.map(type => 
                                <Dropdown.Item onClick={() => game.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{game.selectedBrand.name || "Выберите брэнд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {game.brands.map(brand => 
                                <Dropdown.Item onClick={() => game.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3" 
                        placeholder="Введите название игры"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => Number(setPrice(e.target.value))}
                        className="mt-3" 
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3" 
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant="outline-dark"
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map((i => 
                        <Row className="mt-2" key={i.number}>
                            <Col md={4}> 
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)} 
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}> 
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}  
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)} 
                                    variant={"outline-danger"} 
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addGame}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default CreateGame;