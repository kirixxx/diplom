import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/createBrands';
import CreateType from '../components/modals/createType';
import CreateGame from '../components/modals/createGame';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [gameVisible, setGameVisible] = useState(false)

  return (
    <Container className='d-flex flex-column'>
      <Button 
        variant='outline-dark' 
        className='mt-4 p-2'
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button 
        variant='outline-dark' 
        className='mt-4 p-2'
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд</Button>
      <Button 
        variant='outline-dark' 
        className='mt-4 p-2'
        onClick={() => setGameVisible(true)}
      >
        Добавить устройство
        </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateType  show={typeVisible}  onHide={() => setTypeVisible(false)}/>
      <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
    </Container>
  );
}

export default Admin;
