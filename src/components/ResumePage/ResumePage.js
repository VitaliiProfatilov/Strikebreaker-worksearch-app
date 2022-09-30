import styles from './ResumePage.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { BackButton } from '../BackButton';
import { SaveToFavoriteButton } from '../SaveToFavoriteButton';
import { DeleteFromFavoriteButton } from '../DeleteFromFavoriteButton';
import { EditButton } from '../EditButton';
import { MdLocationOn } from 'react-icons/md';
import { GrUserExpert } from 'react-icons/gr';
import { GiGraduateCap } from 'react-icons/gi';


export class ResumePage extends React.Component {
    render() {
        return (
            <>
                 {this.props.resumeCard.map((resumeCard) => (
                    <div key={resumeCard.id} >
                        <div className={styles.header}>
                            <BackButton/>
                            <div className={styles.headerRight}>
                                <Link to="/AddResume" className={styles.EditButton} > 
                                    <EditButton/> 
                                </Link>                                                   
                            {resumeCard.isFavorite ? <div onClick={() => this.props.deleteFavorite(resumeCard.id)}>
                                    <DeleteFromFavoriteButton/>
                                </div> : <div onClick={() => this.props.addFavorite(resumeCard.id)}>
                                    <SaveToFavoriteButton />
                                </div>}
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <div className={styles.title}> {resumeCard.firstName} {resumeCard.lastName} <div className={styles.subtitle}> {resumeCard.age} year old </div> </div>
                                <div className={styles.logo}> <img src={resumeCard.photo} alt=""/> </div>
                            </div>
                            <ul >
                                <li className={styles.li}> <span> <GrUserExpert/> </span> {resumeCard.jobPosition}, with salary: {resumeCard.salary}. <div className={styles.subtitle}> {resumeCard.experience} </div> </li>
                                <li className={styles.li}> <span> <MdLocationOn/> </span> {resumeCard.cityToWork} </li>
                                <li className={styles.li}> <span> <GiGraduateCap/> </span> {resumeCard.education} </li>
                                <h2> Summary </h2>
                                <li> {resumeCard.description} </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}