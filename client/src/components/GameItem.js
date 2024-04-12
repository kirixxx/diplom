import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import { GAME_ROUTE } from '../utils/consts';

const GameItem = ({game}) => {
    const history = useNavigate()
    return (
        <Col md={3} className='mt-3' onClick={() => history(GAME_ROUTE + '/' + game.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border='light'>
                <Image width={150} height={150} src={game.img}/>
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>Samsung..</div>
                    <div className='d-flex align-items-center'>
                        <div>{game.rating}</div>
                        <Image width={20} height={20} src={star}/>
                    </div>
                </div>
                <div>{game.name}</div> 
            </Card>
        </Col>
    );
}

export default GameItem;
