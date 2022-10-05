import styles from './ApplicantButton.module.scss';
import { Link } from 'react-router-dom';

export function ApplicantButton() {
    return (
        <Link to="/Applicant" className={styles.applicantLinc}>
            <span>Applicant</span> &gt;
        </Link>
    )
}