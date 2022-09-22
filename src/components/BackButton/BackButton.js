import styles from './BackButton.module.scss'

export function BackButton() {
    return(
        <button className={styles.button} onClick={()=>{window.history.go (-1)}} >
            &lt; Back
        </button>
    )
}