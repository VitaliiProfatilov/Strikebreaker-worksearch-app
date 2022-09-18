import styles from './VacancyPage.module.scss'
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export class VacancyPage extends React.Component {
    render() {
        return (
            <>
                {this.props.jobCard.map((jobCard) => (
                    <Link to='/VacancyPage' className={styles.jobCard} key={jobCard.id}>
                        <div className={styles.cardTop}>
                            <div className={styles.title}> {jobCard.jobTitle} </div>
                            <div className={styles.logo}> <img src={jobCard.jobLogo} alt=""/> </div>
                        </div>
                        <ul>
                            <li> <span> {jobCard.salary} </span> {jobCard.typeOfSalary} </li>
                            <li> <span> {jobCard.сompanyName} </span> {jobCard.location} </li>
                            <li className={styles.description}> {jobCard.description} </li>
                        </ul>
                        <div className={styles.saveToFavorit}>
                            <div className={styles.star}>
                                <AiOutlineStar />
                            </div>
                            <div className={styles.text}>
                                    Save to favorit
                            </div>
                        </div>
                    </Link>
                ))}
            </>
        )
    }
}