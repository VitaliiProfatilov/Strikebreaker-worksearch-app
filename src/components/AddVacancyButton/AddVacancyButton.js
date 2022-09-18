import styles from './AddVacancyButton.module.scss';
import { Link } from 'react-router-dom';

export function AddVacancyButton() {
    return (
        <Link to="/AddVacancy" className={styles.AddVacancyButton}>
            <div>
                Add Vacancy
            </div>
        </Link>
    )
}