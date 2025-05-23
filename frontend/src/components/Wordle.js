import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Final from './Final';

export default function Wordle({solution}) {
    const {currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys} = useWordle(solution);
    const [showModal, setShowModal]=useState(false);
    useEffect(()=>{
        window.addEventListener('keyup', handleKeyUp)

        if(isCorrect){
            //game ends
            setTimeout(()=>setShowModal(true), 2000);
            window.removeEventListener('keyup', handleKeyUp)
        }
        if(turn>5){
            setTimeout(()=>setShowModal(true), 2000);
            window.removeEventListener('keyup', handleKeyUp)
        }
        return ()=> window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, isCorrect, turn])

    return (
        <div className="main">
            <Grid 
                currentGuess={currentGuess}
                guesses={guesses}
                turn={turn}
            />
            <Keypad usedKeys={usedKeys} handleKeyUp={handleKeyUp} />
            {showModal && <Final isCorrect={isCorrect} solution={solution}/>}
        </div>
        
    )
}
