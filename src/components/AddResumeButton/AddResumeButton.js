import styles from './AddResumeButton.module.scss';
import { Link } from 'react-router-dom';

export function AddResumeButton() {
    return (
        <Link to="/AddResume" className={styles.AddResumeButton}>
            <div>
                Add Resume
            </div>
        </Link>
    )
}