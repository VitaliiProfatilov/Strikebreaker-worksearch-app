import styles from './EmployerButton.module.scss';
import { Link } from 'react-router-dom';

export function EmployerButton() {
    return (
        <Link to="/" className={styles.employerLinc}>
            <span>Employer</span> &gt;
        </Link>
    )
}