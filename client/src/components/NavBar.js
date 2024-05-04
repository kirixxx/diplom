import React, { useContext, useState } from 'react';
import { Context } from '..';
import basket from '../assets/basket.png';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { fetchGames } from '../http/gameApi';
import { Image } from 'react-bootstrap';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    const {game} = useContext(Context)
    const [search, setSearch] = useState('')
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    const findGame = () => {
        console.log(search)
        fetchGames(null, null , 1, 3, search, true).then(data => {
            game.setGames(data.rows)
            game.setTotalCount(data.count)
        })
        console.log(game)
        setSearch('')
    }
    return(
        <Navbar bg='dark' variant='dark'>
            <Container>                    
                <NavLink style={{color:"white"}} to={SHOP_ROUTE}>Real games</NavLink>
                <div class="input-group w-50 mx-auto">
                    <input type="text" class="form-control me-2" placeholder="Введите название товара" value={search} onChange={e => setSearch(e.target.value)}/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-light" type="button" onClick={findGame}>Search</button>
                    </div>
                </div>     
                    {user.isAuth ? 
                        <Nav className="ms-auto" style={{color:"white"}}>
                            <Button variant={'outline-light'} onClick={() => history(BASKET_ROUTE)}>Избранное</Button>
                            <Button className='ms-2' variant={'outline-light'} onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
                            <Button className='ms-2' variant={'outline-light'} onClick={() => logOut()}>Выйти</Button>
                        </Nav>
                    :
                        <Nav className="ms-auto" style={{color:"white"}}>
                            <Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;