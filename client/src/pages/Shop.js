import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import GameList from '../components/GameList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBrands, fetchGames, fetchTypes } from '../http/gameApi';
import Pages from '../components/Pages';

const Shop = observer(() => {
  const {game} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => game.setTypes(data))
    fetchBrands().then(data => game.setBrands(data))
    fetchGames(null, null, 1, 3, null, null).then(data => {
      game.setGames(data.rows)
      game.setTotalCount(data.count)
    })
  }, [])
  
  useEffect(() => {
    fetchGames(game.selectedType.id, game.selectedBrand.id , game.page, 3, null, null).then(data => {
      game.setGames(data.rows)
      game.setTotalCount(data.count)
    })
  }, [game.page, game.selectedType, game.selectedBrand])
  
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <GameList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
