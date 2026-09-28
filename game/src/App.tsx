import styles from "./App.module.css"
import { WORDS, type Challenge } from "./utils/words"
import { useEffect, useState } from "react"

import { Button } from "./components/Button"
import { Input } from "./components/input"
import { Letter } from "./components/letter"
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { LetterUsed, type LetterUsedProps } from "./components/lettersUsed"

export function App() {
    const [score, setScore] = useState(0)
    const [letter, setLetter] = useState(" ")
    const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([])
    const [challenge, setChallenge] = useState<Challenge | null>(null)
    
    function handleRestartGame(){
        alert("reiniciar o jogo")
    }
    
    
    
    function startGame(){
        const index = Math.floor(Math.random() * WORDS.length)
        const randomWord = WORDS[index]
        setChallenge(randomWord)
        
        setScore(0)
        setLetter("")
        setLetterUsed([])
    }
    
    function handleConfirm(){

        if(!challenge){
            return
        }

        if(!letter.trim()){
            return alert("Digite uma letra")
        }

        const value = letter.toUpperCase()
        const exists = letterUsed.find((used) => used.value.toUpperCase() === value)
        // alert(value)

        if(exists){
            alert("voce ja utilizou essa letra " + value)
            return
        }

        const hits = challenge.word.toUpperCase().split("").filter((char) => char === value).length

        const correct = hits > 0
        const currentScore = score + hits

        setLetterUsed((prevState) => [...prevState, { value, correct  }])
        setScore(currentScore)

        setLetter("")
    }

    useEffect( () => {
        startGame()
    },[])


    if(!challenge){
        return
    }


 return (
    <div className={styles.container}>
        <main>
            <Header current={score} max={10} onRestart={handleRestartGame}/>
            
            <Tip tip={challenge.tip}></Tip>




            <div className={styles.word}>
                {challenge.word.split("").map((letter, index) =>{
                    return(<Letter key = {index} value=""/>
                )})}
            </div>

            <h4>Palpite</h4>

            <div className={styles.guess}>
                <Input autoFocus 
                maxLength={10}
                placeholder="?" 
                value = {letter}
                onChange={(e) =>
                setLetter(e.target.value)}/>
                <Button title="Confirmar" onClick={handleConfirm}/>
            </div>

            <LetterUsed  data = {letterUsed}/>

        </main>
    </div>
 )
}

export default App