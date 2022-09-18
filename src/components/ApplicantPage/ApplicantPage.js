import { Header } from '../Header';
//import styles from './ApplicantPage.module.scss';
import { Link } from 'react-router-dom';

export function ApplicantPage() {
    return (
        <>
            <div>
                <Header />
                <Link to="/">Home</Link>
            </div>
        </>
    )
}