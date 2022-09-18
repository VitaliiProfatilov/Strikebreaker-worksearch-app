import { AiFillEyeInvisible } from 'react-icons/ai';
import styles from './HideButton.module.scss'

export function HideButton() {
    return(
        <button type='button' className={styles.button}>
            <div className={styles.eye}>
                <AiFillEyeInvisible />
            </div>
            Hide
        </button>
    )
}