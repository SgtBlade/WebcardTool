import React from 'react';
import style from "./card.module.css"

const Card = ({shown, data, method, minify}) => {

    const randomMix = Math.floor((Math.random() * 2));
    if (method === "regular" || (method === "mix" && randomMix === 1))
    return (
        <div className={`${style.card}`}>
                <p className={style.cardSubject} 
                    style={{fontSize:data.front.length === 1 ? '30rem':data.front.length === 2 ? '15rem':'10rem'}}
                >{data.front}</p>
                <p className={`${style.cardAnswer} ${shown ? '' : style.hidden}`}>{data.back}</p>
        </div>
    );

    else if (method === "reverse"  || (method === "mix" && randomMix === 0)) 
    return (
        <div className={`${style.card}`}>
                <p className={style.cardSubject}
                    style={{fontSize:data.back.length === 1 ? '30rem':data.back.length === 2 ? '15rem':'10rem'}}
                >{data.back}</p>
                <p className={`${style.cardAnswer} ${shown ? '' : style.hidden}`}>{data.front}</p>
        </div>
    );

};

export default Card;