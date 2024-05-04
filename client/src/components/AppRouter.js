import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';
import Shop from '../pages/Shop';

const AppRouter = () => {
    //const {user} = useContext(Context)

    return (
        <Routes>
            {authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Shop/>}/>
        </Routes>   
  );
}

export default AppRouter;
