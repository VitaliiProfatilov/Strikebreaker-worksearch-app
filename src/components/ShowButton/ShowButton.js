import { AiFillEye } from 'react-icons/ai';
import styles from './ShowButton.module.scss'

export function ShowButton() {
    return(
        <button type='button' className={styles.button}>
            <div className={styles.eye}>
                <AiFillEye />
            </div>
            Show
        </button>
    )
}