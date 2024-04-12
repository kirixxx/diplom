import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import GameItem from './GameItem';

const GameList = observer(() => {
    const {game} = useContext(Context)
  return (
    <Row className='d-flex'>
      {game.games.map(game => 
        <GameItem key={game.id} game={game} />
      )}
    </Row>
  );
});

export default GameList;
