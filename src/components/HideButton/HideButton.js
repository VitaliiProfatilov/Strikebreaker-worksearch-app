import { TbStar } from 'react-icons/tb';
import styles from './HideButton.module.scss'

export function HideButton() {
    return(
        <button type='button' className={styles.button}>
            <div className={styles.star}>
                <TbStar />
            </div>
            Save to favorite
        </button>
    )
}