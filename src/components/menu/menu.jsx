import React, { useState } from 'react';
import { useRootContext } from '../../contexts/rootContainer';
import style from './menu.module.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../consts';

const Menu = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const { data, activeSet, setActiveSet, working} = useRootContext();

    const changeSet = (newItem) => {
        if (working) {
            let answer = window.confirm("Do you want to change series and reset the current progress?");
            if (answer) {
                if (activeSet === newItem) setActiveSet(false)
                else setActiveSet(newItem)
            }
        } else {
            if (activeSet === newItem) setActiveSet(false)
            else setActiveSet(newItem)
        }
    }

    return (
        <nav className={`${style.menu} ${toggleMenu ? style.menu__folded : ''}`}>
            <div className={style.menu__options}>
                <Link to={ROUTES.home.path}><p className={style.menu__options__home}>⌂ Home</p></Link>
                <p onClick={() => setToggleMenu(!toggleMenu)} className={style.menu__close}>►</p>
            </div>
            <ul className={style.menu__list}>
                {Object.keys(data).map((dataItem, index) => {
                    return (
                        <li onClick={() => changeSet(dataItem)} className={`${style.menu__item} ${dataItem === activeSet ? style.active : ''}`} key={`${dataItem} - ${index}`}>{dataItem}</li>
                    )
                })}
            </ul>

            <p className={style.activeSet}><span>Active:</span> {activeSet ? activeSet : 'All'}</p>
        </nav>
    );
};

export default Menu;