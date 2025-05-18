import {useState} from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] =useState(0)
    const [currentGuess, setCurrentGuess]=useState("");
    const [guesses, setGuesses]=useState([...Array(6)]);
    const [history, setHistory]=useState([]);
    const [isCorrect, setIsCorrect]=useState(false);
    const [usedKeys, setUsedKeys]=useState({}) //{a: 'purple', b: 'grey'}
    //format guess into {key, color}
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((letter)=>{
            return {key : letter, color: 'grey'}
        })

        formattedGuess.forEach((l, i)=>{
            if(solutionArray[i] === l.key){
                l.color='purple'
                solutionArray[i]=null;
            }
        })
        formattedGuess.forEach((l, i)=>{
            if(solutionArray.includes(l.key) && l.color!=='purple'){
                l.color='blue'
                solutionArray[solutionArray.indexOf(l.key)]=null;
            }
        })
        return formattedGuess;
    }

    //add guesses to guesses  state
    //update isCorrect state if correct
    //add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true);
        }
        setGuesses((prevGuesses)=>{
            let newGuesses = [...prevGuesses];
            newGuesses[turn]=formattedGuess;
            return newGuesses;
        })
        setHistory((prevHistory)=>{
            return [...prevHistory, currentGuess];
        })
        setTurn((prevTurn)=>{
            return prevTurn+1
        })
        setUsedKeys((prevUsedKeys)=>{
            let newKeys={...prevUsedKeys}
            formattedGuess.forEach((l)=>{
                const currentColor=newKeys[l.key]

                if(l.color==='purple'){
                    newKeys[l.key]='purple';
                    return
                }
                if(l.color==='blue' && currentColor!=='purple'){
                    newKeys[l.key]='blue'
                    return
                }
                if(l.color==='grey' && currentColor!=='purple' && currentColor!=='blue'){
                    newKeys[l.key]='grey'
                    return
                }
            })
            return newKeys
        })
        setCurrentGuess('')
    }

    //handle key up event to track current guess
    //handle enter event to add new guess

    const handleKeyUp = ( {key} ) => {
        if(key === 'Enter' || key==='ENTER'){
            if(turn>5){
                console.log("Eh!")
                return
            }
            if(history.includes(currentGuess)){
                console.log("Eh!")
                return
            }
            if(currentGuess.length !== 5){
                console.log("Eh!")
                return
            }
            const formatted=formatGuess()
            addNewGuess(formatted)
        }
        if(key === 'Backspace' || key==='BACKSPACE'){
            setCurrentGuess((prev)=>{
                return prev.slice(0, -1) //removes last character
            })
        }
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev)=>{
                    return prev + key
                })
            }
        }
    }

    const resetGame = () => {
        setTurn(0);
        setCurrentGuess('');
        setGuesses([...Array(6)]);
        setHistory([]);
        setIsCorrect(false);
        setUsedKeys({});
      };
    
      return {
        turn,
        currentGuess,
        guesses,
        isCorrect,
        usedKeys,
        handleKeyUp,
        resetGame, // expose reset
      };
    };
 
export default useWordle