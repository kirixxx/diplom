import React, { useContext } from 'react';
import { Context } from '..';
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import Button from 'react-bootstrap/Button';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return(
        <Navbar bg='dark' variant='dark'>
            <Container>
                <NavLink style={{color:"white"}} to={SHOP_ROUTE}>Купи Девайс</NavLink>
                    {user.isAuth ? 
                        <Nav className="ms-auto" style={{color:"white"}}>
                            <Button variant={'outline-light'}>Админ панель</Button>
                            <Button className='ms-2' variant={'outline-light'}>Войти</Button>
                        </Nav>
                    :
                        <Nav className="ms-auto" style={{color:"white"}}>
                            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;