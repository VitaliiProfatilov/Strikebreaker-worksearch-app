import { TbStarOff } from 'react-icons/tb';
import styles from './ShowButton.module.scss'

export function ShowButton() {
    return(
        <button type='button' className={styles.button}>
            <div className={styles.star}>
                <TbStarOff />
            </div>
            показать
        </button>
    )
}