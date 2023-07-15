import React, { useContext, useState } from 'react';
import { storeContext } from '../../hooks/context';
import { useRootContext } from '../../contexts/RootContainer';
import style from './Menu.module.css';

const Menu = () => {


    const {data} = useRootContext();

    console.log(data);

    return (
            <nav className={style.menu}>
                <ul className={style.menu__list}>
                {Object.keys(data).map((dataItem, index) => {
                return (
                    <li className={style.menu__item} key={`${dataItem} - ${index}`}>{dataItem}</li>
                )
            })}
                </ul>
            </nav>
    );
};

export default Menu;