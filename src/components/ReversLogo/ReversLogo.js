import styles from './ReversLogo.module.scss';
import { Link } from 'react-router-dom';
import ReversLogo from "../../img/ReversLogo.png";

export function LogoRevers() {
    return(
        <div className={styles.reversLogo}>
            <Link to='/Strikebreaker-worksearch-app'>
                <img src={ReversLogo} alt=''/>
            </Link>
        </div>
    )
}