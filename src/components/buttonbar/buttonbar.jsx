import React from 'react';
import style from './buttonbar.module.css'

const Buttonbar = ({ returnResponse, shown }) => {
    return (
        <div className={`${style.checkbar} ${!shown ? style.hidden : ''}`}>
            <ol className={style.checkbar__list}>
                <li onClick={() => { returnResponse('Failed') }} className={style.checkbar__list__item}>Failed</li>
                <li onClick={() => { returnResponse('Bad') }} className={style.checkbar__list__item}>Bad</li>
                <li onClick={() => { returnResponse('Okey') }} className={style.checkbar__list__item}>Okey</li>
                <li onClick={() => { returnResponse('Easy') }} className={style.checkbar__list__item}>Easy</li>
            </ol>
        </div>
    );
};

export default Buttonbar;