
import logo from "../../assets/logo.png"
import restart from "../../assets/Frame.svg"
import styles from "./styles.module.css"

export function Header(){
    const {container} =  styles;

    return (

    <div className={container}>
        <img src={logo} alt="logo" />

        <header>
            <span>
                <strong>5</strong> de 10 tentativas
            </span>


            <button type="button">
                <img src={restart} alt="icone de reiniciar" />
            </button>
        </header>

    </div>









    )
}