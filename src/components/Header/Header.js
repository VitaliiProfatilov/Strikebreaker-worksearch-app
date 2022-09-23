import styles from './Header.module.scss';
import Logo from "../../img/Logo.PNG";
import { AiOutlineStar } from 'react-icons/ai';
import { ApplicantButton } from '../ApplicantButton';
import { AddVacancyButton } from '../AddVacancyButton';
import { Link } from 'react-router-dom';
import React from 'react';

export class Header extends React.Component {
    render() {
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
                       {window.location.href === 'http://localhost:3000/' ? <div>
                            <ApplicantButton />
                        </div> : <div className={styles.HeaderButtons}>
                            <div onClick={() => this.props.edit()}>
                                <AddVacancyButton />
                            </div>
                            <div>
                                hi
                            </div>
                        </div>}
                    </div>
                </div>
            </header>
        )
    }
}