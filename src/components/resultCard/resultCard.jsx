import React from 'react';
import style from "./resultCard.module.css"

const ResultCard = ({shown, data, difficulty}) => {

    return (
        <div className={`${style.card}`}>
                <p className={`${style.difficulty} ${style[data.difficulty]}`}>{data.difficulty}</p>
                <p className={style.cardSubject} 
                    style={{fontSize:data.front.length === 1 ? '7.5rem':data.front.length === 2 ? '3.75rem':'2.5rem'}}
                >{data.front}</p>
                <p className={`${style.cardAnswer} ${shown ? '' : style.hidden}`}>{data.back}</p>
        </div>
    );


};

export default ResultCard;