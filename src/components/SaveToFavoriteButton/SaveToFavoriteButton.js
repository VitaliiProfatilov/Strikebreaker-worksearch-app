import { TbStar } from 'react-icons/tb';
import styles from './SaveToFavoriteButton.module.scss'

export function SaveToFavoriteButton() {
    return(
        <button type='button' className={styles.button}>
            <div className={styles.star}>
                <TbStar />
            </div>
            Save to favorite
        </button>
    )
}