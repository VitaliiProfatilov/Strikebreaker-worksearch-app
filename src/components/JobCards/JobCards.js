import styles from './JobCard.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { SaveToFavoriteButton } from '../SaveToFavoriteButton';
import { DeleteFromFavoriteButton } from '../DeleteFromFavoriteButton';
import { HideButton } from '../HideButton';
import { ShowButton } from '../ShowButton';


export class JobCards extends React.Component {
    render() {
        return (
            <>
                {this.props.jobCards.map((jobCard) => (
                    <div className={styles.jobCard} key={jobCard.id} >
                        <div className={styles.cardTop}>
                            <Link to='/VacancyPage' className={styles.title} onClick={() => this.props.jobCardId(jobCard.id)} > {jobCard.jobTitle} </Link>
                            <div className={styles.logo}> <img src={jobCard.jobLogo} alt=""/> </div>
                        </div>
                        <ul>
                            <li> <span> {jobCard.salary} </span> {jobCard.typeOfSalary} </li>
                            <li> <span> {jobCard.сompanyName} </span> {jobCard.location} </li>
                            <li className={styles.description}> {jobCard.description} </li>
                        </ul>
                        <div className={styles.jobCardFooter}>
                            {jobCard.isHidden === true ? <div onClick={() => this.props.showCard(jobCard.id)}>
                                    <ShowButton />
                                </div> : <div onClick={() => this.props.hideCard(jobCard.id)}>
                                    <HideButton />
                                </div>}
                            {jobCard.isFavorite ? <div onClick={() => this.props.deleteFavorite(jobCard.id)}>
                                    <DeleteFromFavoriteButton/>
                                </div> : <div onClick={() => this.props.addFavorite(jobCard.id)}>
                                    <SaveToFavoriteButton/>
                                </div>}
                        </div>
                    </div>
                ))}
            </>
        )
    }
}