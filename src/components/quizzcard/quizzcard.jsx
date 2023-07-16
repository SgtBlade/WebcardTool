import React, { useEffect, useState } from 'react';
import style from "./quizzcard.module.css"
import Button from '../button/button';
import { useRootContext } from '../../contexts/rootContainer';

const Quizzcard = ({ dataset, data, method, addToCompleted }) => {

    const { activeSet } = useRootContext();
    const [randomResponses, setRandomResponses] = useState([]);
    const [answer, setAnswer] = useState(undefined)
    const [reveal, setReveal] = useState(false)

    const handleResponse = (response, side) => {
        if (side === 'back') {
            if (response === data.back) {
                setAnswer(true)
                setTimeout(() => {
                    setAnswer(undefined); setReveal(false);
                    setRandomResponses([])
                    if (!reveal) addToCompleted('Correct');
                    else addToCompleted('Failed');

                }, 1000)

            } else {
                setAnswer(false)
            }
        } else {
            if (response === data.front) {
                setAnswer(true)
                setTimeout(() => {
                    setAnswer(undefined); setReveal(false);
                    setRandomResponses([])
                    if (!reveal) addToCompleted('Correct');
                    else addToCompleted('Failed');
                }, 1000)
            } else {
                setAnswer(false)
            }
        }
    }

    useEffect(() => {
        if (randomResponses.length === 0) {
            const mergedData = [...Object.values(dataset.data), ...Object.values(dataset.completed)];
            const randomObjects = [data];
            const numRandomObjects = 4;

            while (randomObjects.length < numRandomObjects) {
                const randomIndex = Math.floor(Math.random() * mergedData.length);
                const selectedObject = mergedData[randomIndex];

                if (!randomObjects.includes(selectedObject)) {
                    randomObjects.push(selectedObject);
                }
            }

            for (let i = randomObjects.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [randomObjects[i], randomObjects[j]] = [randomObjects[j], randomObjects[i]];
            }

            setRandomResponses(randomObjects);
        }

    }, [randomResponses, data, dataset])

    useEffect(() => {
        setAnswer(undefined);
        setReveal(false);
        setRandomResponses([])
    }, [activeSet])

    const randomMix = Math.floor((Math.random() * 2));
    if (method === "regular" || (method === "mix" && randomMix === 1))
        return (
            <div className={`${style.card}`}>
                <p className={style.cardSubject}>What is "<span>{data.front}</span>"?</p>
                <div className={`${style.card__options} ${style.capitalise}`}>

                    {
                        randomResponses.map((response, index) => {
                            return (
                                <Button
                                    key={index}
                                    text={response.back}
                                    action={() => handleResponse(response.back, 'back')}
                                    styleoverride={(reveal && response.back === data.back) || (answer && response.back === data.back) ? { backgroundColor: '#B0D0A3', color: '#562135' } : {}}
                                />
                            )
                        })
                    }

                </div>

                {
                    answer !== undefined ? answer ?
                        <div className={`${style.response} ${style[answer]}`}><p>Correct</p></div>
                        :
                        <div className={`${style.response} ${style[answer]}`}><p>Wrong</p> {!reveal ? <Button action={() => setReveal(true)} styleoverride={{ margin: 0, padding: '.5rem 1rem' }} text={'Reveal'} /> : ''}</div>
                        : ''
                }

            </div>
        );

    else if (method === "reverse" || (method === "mix" && randomMix === 0))
        return (
            <div className={`${style.card}`}>
                <p className={style.cardSubject}>What is "<span>{data.back}</span>"?</p>
                <div className={`${style.card__options} ${style.capitalise}`}>

                    {
                        randomResponses.map((response, index) => {
                            return (
                                <Button
                                    key={index}
                                    text={response.front}
                                    action={() => handleResponse(response.front, 'front')}
                                    styleoverride={(reveal && response.front === data.front) || (answer && response.back === data.back) ? { backgroundColor: '#B0D0A3', color: '#562135' } : {}}
                                />
                            )
                        })
                    }

                </div>

                {
                    answer !== undefined ? answer ?
                        <div className={`${style.response} ${style[answer]}`}><p>Correct</p></div>
                        :
                        <div className={`${style.response} ${style[answer]}`}><p>Wrong</p> {!reveal ? <Button action={() => setReveal(true)} styleoverride={{ margin: 0, padding: '.5rem 1rem' }} text={'Reveal'} /> : ''}</div>
                        : ''
                }

            </div>
        );

};

export default Quizzcard;