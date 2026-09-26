import styles from "./App.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"

export function App() {

    function handleRestartGame(){
        alert("reiniciar o jogo")
    }





 return (
    <div className={styles.container}>
        <main>
            <Header current={5} max={10} onRestart={handleRestartGame}/>
            
            <Tip tip="Linguagem de programação dinamica"></Tip>
        </main>
    </div>
 )
}

export default App