import styles from './ResumeCards.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { SaveToFavoriteButton } from '../SaveToFavoriteButton';
import { DeleteFromFavoriteButton } from '../DeleteFromFavoriteButton';
import { HideButton } from '../HideButton';
import { ShowButton } from '../ShowButton';


export class ResumeCards extends React.Component {
    render() {
        return (
            <>
                {this.props.resumeCards.map((resumeCard) => (
                    resumeCard.isHidden ? <div className={styles.emptyJobCard} key={resumeCard.id} >
                       <span className={styles.emptyJobCardH1}> You have hidden a vacancy </span> 
                       <span className={styles.emptyJobCardH2}> «» of the «» сompany. </span>
                       <div className={styles.emptyJobCardButton} onClick={() => this.props.hideCard(resumeCard.id)}> <ShowButton /> </div>
                    </div> :
                    <div className={styles.jobCard} key={resumeCard.id} >
                        <div className={styles.cardTop}>
                            <Link to='/VacancyPage' className={styles.title} onClick={() => this.props.resumeCardId(resumeCard.id)} > {resumeCard.jobPosition} </Link>
                            <div className={styles.logo}> <img src={resumeCard.photo} alt=""/> </div>
                        </div>
                        <div> 
                            {resumeCard.salary}  
                        </div>
                        <div> 
                            {resumeCard.cityToWork}  
                        </div>
                        <div className={styles.jobCardFooter}>
                            <div className={styles.hideCard} onClick={() => this.props.hideCard(resumeCard.id)}>
                                <HideButton />
                            </div>
                            {resumeCard.isFavorite ? <div onClick={() => this.props.deleteFavoriteResume(resumeCard.id)}>
                                    <DeleteFromFavoriteButton/>
                                </div> : <div onClick={() => this.props.addFavoriteResume(resumeCard.id)}>
                                    <SaveToFavoriteButton/>
                                </div>}
                        </div>
                    </div>
                ))}
            </>
        )
    }
}