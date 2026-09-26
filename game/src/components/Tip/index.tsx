import styles from "./style.module.css"
import tipIcon from "../../assets/Frame-1.svg"

type Props = {
    tip: string
}

export function Tip({tip}: Props){
    return <div className={styles.tip}>
        <img src={tipIcon} alt="icone dica" />

        <div>
            <h3>Dica</h3>
            <p>{tip}</p>
        </div>
    </div>
}