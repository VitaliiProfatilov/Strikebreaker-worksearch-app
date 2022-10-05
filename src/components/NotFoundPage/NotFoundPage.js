import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';
import NotFound from "../../img/NotFound.png";

export function NotFoundPage() {
    return(
        <div className={styles.container}>
            <img className={styles.img} src={NotFound} alt=""/>
            <div className={styles.notFound}>
                404 Not found 
            </div>
            <Link to='/Strikebreaker-worksearch-app/' className={styles.link}>
                Go home
            </Link>
        </div>
    )
}