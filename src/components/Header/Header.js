import styles from './Header.module.scss';
import Logo from "../../img/Logo.PNG";
import { AiOutlineStar } from 'react-icons/ai';
import { ApplicantButton } from '../ApplicantButton';
import { AddVacancyButton } from '../AddVacancyButton';
import { AddResumeButton } from '../AddResumeButton';
import { Link } from 'react-router-dom';
import React from 'react';
import { FaRegAddressCard } from 'react-icons/fa';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { EmployerButton } from '../EmployerButton';

export class Header extends React.Component {
    render() {
        return (
            <header className={styles.headerContainer}>
                <div className={styles.logo}>
                    <img src={Logo} alt=""/>
                </div>
                <div className={styles.headerButtons}>
                    <Link className={styles.headerFavorit} to='/Favorite'>
                        <div className={styles.span}>  <AiOutlineStar /> </div>
                        Favorit
                    </Link>
                    <div className={styles.pageButtons}>
                       {window.location.href === 'http://localhost:3000/' ? <div className={styles.rightButtons}>
                            <div className={styles.addButton} onClick={() => this.props.editResume()}>
                                <div className={styles.span}> <FaRegAddressCard /> </div>
                                <AddResumeButton />
                            </div>
                            <div className={styles.toButton}> 
                                <ApplicantButton /> 
                            </div>
                        </div> : <div className={styles.rightButtons}>
                            <div className={styles.addButton} onClick={() => this.props.editJob()}>
                                <div className={styles.span}> <AiOutlineFileAdd/> </div>
                                <AddVacancyButton />
                            </div>
                            <div className={styles.toButton}>
                                <EmployerButton/>
                            </div>
                        </div>}
                    </div>
                </div>
            </header>
        )
    }
}