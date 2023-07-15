import React from 'react';
import Menu from '../../components/menu/menu';
import style from "./home.module.css"
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../../consts/index.js';
import Start from '../start/start';

const Home = () => {


    return (
        <div className={style.container}>

            <Menu/>

            <Routes>
                <Route path={ROUTES.home.path} element={<Start/>} />
            </Routes>
            
        </div>
    );
};

export default Home;