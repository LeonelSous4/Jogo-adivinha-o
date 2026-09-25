
import logo from "../../assets/logo.png"
import restart from "../../assets/Frame.svg"
import styles from "./styles.module.css"



type Props = {
    current: number
    max: number
    onRestart: () => void
}





export function Header({current, max, onRestart}: Props){
    const {container} =  styles;

    return (

    <div className={container}>
        <img src={logo} alt="logo" />

        <header>
            <span>
                <strong>{current}</strong> de {max} tentativas
            </span>


            <button type="button" onClick={onRestart}>
                <img src={restart} alt="icone de reiniciar" />
            </button>
        </header>

    </div>









    )
}