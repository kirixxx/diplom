import React, { useContext, useState } from 'react';
import {Button, Container, Form, FormControl} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
    } catch (e) {

    }
  }

  return (
    <Container 
    className='d-flex justify-content-center align-items-center'
    style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: '600px'}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <FormControl 
            className='mt-3'
            placeholder='Введите ваш email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <FormControl 
            className='mt-3'
            placeholder='Введите ваш пароль...'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <div style={{display:'flex', 'justify-content':'space-between', 'margin-top': '10px'}}>
            {isLogin ? 
              <div style={{display:'flex', }}>
                Нет аккаунта?<NavLink className='ms-1' to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
              :
              <div style={{display:'flex', }}>
                Есть аккаунт?<NavLink className='ms-1' to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            }
            <Button
              className='align-self-end' 
              variant={'outline-success'}
              onClick={click}
            >
              {isLogin ? 
              'Войти'
              :
              'Регистрация'
              }
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
