import styles from './EditButton.module.scss'
import { RiFileEditLine } from 'react-icons/ri';

export function EditButton() {
    return(
        <button className={styles.button}>
            <div className={styles.editLine}>
                <RiFileEditLine />
            </div>
            Edit
        </button>
    )
}