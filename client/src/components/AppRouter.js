import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} Component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} Component={Component} exact/>
            )}
        </Routes>
  );
}

export default AppRouter;
