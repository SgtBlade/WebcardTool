import React, { useEffect } from 'react';
import style from './start.module.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../consts';
import Button from '../../components/button/button';
import { useRootContext } from '../../contexts/rootContainer';

const Start = () => {

    const { working, setWorking } = useRootContext()

    useEffect(() => {
        if (working) setWorking(false)
    })

    return (
        <div className={style.container}>


            <div className={style.buttoWrapper}>
                <Link to={`${ROUTES.flashcards.to}regular`}>
                    <Button text={'Flashcards regular'} />
                </Link>

                <Link to={`${ROUTES.flashcards.to}reverse`} className={style.button}>
                    <Button text={'Flashcards reverse'} />
                </Link>

                <Link to={`${ROUTES.flashcards.to}mix`} className={style.button}>
                    <Button text={'Flashcards mix'} />
                </Link>

                <Link to={`${ROUTES.quizz.to}regular`} className={style.button}>
                    <Button text={'Quizz regular'} />
                </Link>

                <Link to={`${ROUTES.quizz.to}reverse`} className={style.button}>
                    <Button text={'Quizz reverse'} />
                </Link>

                <Link to={`${ROUTES.quizz.to}mix`} className={style.button}>
                    <Button text={'Quizz mix'} />
                </Link>
            </div>



        </div>
    );
};

export default Start;