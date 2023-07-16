import React from 'react';
import Menu from '../../components/menu/menu';
import style from "./home.module.css"
import { Route, Routes } from 'react-router-dom';
import ROUTES from '../../consts';
import Start from '../start/start';
import Quizz from '../quizz/quizz';
import Flashcards from '../flashcards/flashcards';

const Home = () => {


    return (
        <div className={style.container}>

            <Menu/>

            <Routes>
                <Route path={ROUTES.home.path} element={<Start/>} />
                <Route path={ROUTES.flashcards.path} element={<Flashcards/>}/>
                <Route path={ROUTES.quizz.path} element={<Quizz/>}/>
                <Route path={'*'} element={<Start/>}/>
            </Routes>
            
        </div>
    );
};

export default Home;