import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import BigStar from '../assets/BigStar.png';
import {useParams} from 'react-router-dom';
import { fetchOneGame } from '../http/gameApi';
const GamePage = () => {
  const [game, setGame] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneGame(id).then(data => setGame(data))
  }, [])
  console.log(game)
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + '/' + game.img} />
        </Col>
        <Col md={4}>
          <Row className='d-flex align-items-center flex-column'>
            <h2>{game.name}</h2>
            <div
              className='d-flex justify-content-center align-items-center'
              style={{background: `url(${BigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
            >
              {game.rating}
              
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От: {game.price} руб.</h3>
            <Button variant='outline-dark'>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        {game.info.map((info, index) => 
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
}

export default GamePage;
