import { JobCards } from '../JobCards';
import React from 'react';
import styles from './FavoritePage.module.scss';
import { LogoRevers } from '../ReversLogo';
import { Footer } from '../Footer';

export class FavoritePage extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <LogoRevers/>
                {this.props.jobCards.length > 0 ? this.FullPage() : this.EmptyPage()}
                <div className={styles.jobCardsContainer}>
                    <span className={styles.resumeSpan}> Favorite resume: </span>
                </div>
                <Footer/>
            </div>
        )
    }
    EmptyPage() {
        return (
            <div className={styles.jobCardsContainer}> <span className={styles.vacanciesSpan}> You don't have favorite vacancies </span> </div>
        )
    }
    FullPage() {
        return (
            <div className={styles.jobCardsContainer}>
            <span className={styles.vacanciesSpan}> Favorite vacancies: </span>
            <JobCards showCard={this.props.showCard} hideCard={this.props.hideCard} jobCards={this.props.jobCards} jobCardId={this.props.jobCardId} deleteFavorite={this.props.deleteFavorite} isFavorite={this.props.isFavorite} addFavorite={this.props.addFavorite}/>
        </div>
        )
    }
}
