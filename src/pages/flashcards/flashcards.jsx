import React, { useEffect, useState } from 'react';
import style from "./flashcards.module.css"
import Buttonbar from '../../components/buttonbar/buttonbar';
import { useParams } from 'react-router-dom';
import { useRootContext } from '../../contexts/rootContainer';
import Card from '../../components/card/card';
import ResultCard from '../../components/resultCard/resultCard';
import Button from '../../components/button/button';

const Flashcards = () => {
    const { type } = useParams();
    const { activeSet, data, working, setWorking } = useRootContext();
    const [chosenDataset, setChosenDataset] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        shown: false,
        index: false
    })
    const [completed, setCompleted] = useState([])

    useEffect(() => {

        if (chosenDataset.length === 0) {
            if (!activeSet) setDataseries(false);
            else setDataseries(true);
        } else {
            setCompleted([])
            setDataseries(activeSet);
        }

    }, [activeSet])

    useEffect(() => {
        if (!working) setWorking(true)
    })

    const setDataseries = (casual = true) => {
        setCurrentItem({
            shown: false,
            index: false
        })
        if (casual) {
            setChosenDataset(structuredClone((data[activeSet])))
        } else {
            const mergedData = {};
            for (const key in data) {
                const innerData = data[key];
                for (const innerKey in innerData) {
                    mergedData[innerKey] = innerData[innerKey];
                }
            }
            setChosenDataset(mergedData)
        }
    }

    const setFlashFormula = () => {
        const keysArray = Object.keys(chosenDataset);
        const randomIndex = Math.floor(Math.random() * keysArray.length);
        setCurrentItem({ ...currentItem, index: keysArray[randomIndex] });
    }

    const addToCompleted = async (difficulty) => {
        completed[currentItem.index] = { ...chosenDataset[currentItem.index], difficulty: difficulty };
        nextElement();
    }

    const nextElement = () => {
        delete chosenDataset[currentItem.index];
        setCurrentItem({ shown: false, index: false });
    }

    const catchClick = () => { if (!currentItem.shown && Object.keys(chosenDataset).length > 0) setCurrentItem({ ...currentItem, shown: true }); }

    const retry = async () => {
        setCurrentItem({ shown: false, index: false });
        setChosenDataset(completed)
        setCompleted([])
    }

    return (
        <main className={`${style.container} ${Object.keys(chosenDataset).length === 0 && Object.keys(completed).length > 0 ? style.results : ''}`} onClick={catchClick}>

            {Object.keys(chosenDataset).length > 0 ?
                <Card minify={false} data={!currentItem.index ? setFlashFormula() : chosenDataset[currentItem.index]} shown={currentItem.shown} method={type} />
                :
                <div className={style.flashcardWrap}>
                    <div className={style.flashcardWrap__control}>
                        <Button text={'Retry'} action={retry} />
                    </div>
                    {Object.keys(completed).map((item, index) => {
                        return <ResultCard key={`${completed[item].front}-${index}`} data={completed[item]} shown={true} method={type} />
                    })}
                </div>
            }

            <Buttonbar returnResponse={addToCompleted} shown={currentItem.shown} />
        </main>
    );
};

export default Flashcards;