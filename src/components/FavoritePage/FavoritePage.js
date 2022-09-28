import { JobCards } from '../JobCards';
import { ResumeCards } from '../ResumeCards';
import React from 'react';
import styles from './FavoritePage.module.scss';
import { LogoRevers } from '../ReversLogo';
import { Footer } from '../Footer';

export class FavoritePage extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <LogoRevers/>
                {this.props.jobCards.length > 0 ? 
                    <div className={styles.cardsContainer}>
                        <span className={styles.vacanciesSpan}> Favorite vacancies: </span>
                        <JobCards hideCard={this.props.hideCard} jobCards={this.props.jobCards} jobCardId={this.props.jobCardId} deleteFavorite={this.props.deleteFavoriteJob} isFavorite={this.props.isFavorite} addFavorite={this.props.addFavoriteJob}/>
                    </div> 
                    : 
                    <div className={styles.cardsContainer}> 
                        <span className={styles.vacanciesSpan}> You don't have favorite vacancies </span> 
                    </div>
                };
                {this.props.resumeCards.length > 0 ? 
                    <div className={styles.cardsContainer}>
                        <span className={styles.resumeSpan}> Favorite resume: </span>
                        <ResumeCards hideCard={this.props.hideCard} resumeCards={this.props.resumeCards} resumeCardId={this.props.resumeCardId} deleteFavoriteResume={this.props.deleteFavoriteResume} isFavorite={this.props.isFavorite} addFavoriteResume={this.props.addFavoriteResume}/>
                    </div> 
                    : 
                    <div className={styles.cardsContainer}> 
                        <span className={styles.vacanciesSpan}> You don't have favorite resume </span> 
                    </div>
                }
                <Footer/>
            </div>
        )
    }
}
