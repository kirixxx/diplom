import React, { useContext } from 'react';
import { Context } from '..';
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import Button from 'react-bootstrap/Button';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    console.log(user.isAuth)

    return(
        <Navbar bg='dark' variant='dark'>
            <Container>
                <NavLink style={{color:"white"}} to={SHOP_ROUTE}>Купи Девайс</NavLink>
                    {user.isAuth ? 
                        <Nav className="ms-auto" style={{color:"white"}}>
                            <Button variant={'outline-light'} onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
                            <Button className='ms-2' variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Выйти</Button>
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