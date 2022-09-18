import styles from './Header.module.scss';
import Logo from "../../img/Logo.PNG";
import { AiOutlineStar } from 'react-icons/ai';
import { ApplicantButton } from '../ApplicantButton';
import { AddVacancyButton } from '../AddVacancyButton';
import { Link } from 'react-router-dom';

function HeaderButton() {
    if (window.location.href === 'http://localhost:3000/') {
        return (
            <div>
                <ApplicantButton />
            </div>
        )
    } else {
        return (
            <div className={styles.HeaderButtons}>
                <div>
                    <AddVacancyButton />
                </div>
                <div>
                    hi
                </div>
            </div>
        )
    } 
}

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <img src={Logo} alt=""/>
            </div>
            <div className={styles.HeaderButtons}>
                <Link className={styles.headerFavorit} to='/Favorite'>
                    <div className={styles.span}>  <AiOutlineStar /> </div>
                    Favorit
                </Link>
                <div className={styles.pageButton}>
                    <HeaderButton />
                </div>
            </div>
        </header>
    )
}