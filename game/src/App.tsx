import styles from "./App.module.css"

import { Header } from "./components/Header"

export function App() {

    function handleRestartGame(){
        alert("reiniciar o jogo")
    }





 return (
    <div className={styles.container}>
        <main>
            <Header current={5} max={10} onRestart={handleRestartGame}/>
        </main>
    </div>
 )
}

export default App