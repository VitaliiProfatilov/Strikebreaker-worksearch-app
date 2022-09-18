import { TbStarOff } from 'react-icons/tb';
import styles from './DeleteFromFavoriteButton.module.scss'

export function DeleteFromFavoriteButton() {
    return(
        <button type='button' className={styles.button}>
            <div className={styles.star}>
                <TbStarOff />
            </div>
            Delete from favorite
        </button>
    )
}