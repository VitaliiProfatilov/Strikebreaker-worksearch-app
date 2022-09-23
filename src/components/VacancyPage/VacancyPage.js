import styles from './VacancyPage.module.scss'
import React from 'react'
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FaBuilding } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { BackButton } from '../BackButton';
import { SaveToFavoriteButton } from '../SaveToFavoriteButton';
import { DeleteFromFavoriteButton } from '../DeleteFromFavoriteButton';
import { EditButton } from '../EditButton';
import { Link } from 'react-router-dom';

export class VacancyPage extends React.Component {
    render() {
        return (
            <>
                {this.props.jobCard.map((jobCard) => (
                    <div key={jobCard.id} >
                        <div className={styles.header}>
                            <BackButton/>
                            <div className={styles.headerRight}>
                                <Link to="/AddVacancy" className={styles.EditButton} > 
                                    <EditButton/> 
                                </Link>                                                   
                            {jobCard.isFavorite ? <div onClick={() => {this.props.deleteFavorite(jobCard.id); this.props.jobCardId(jobCard.id) }}>
                                    <DeleteFromFavoriteButton/>
                                </div> : <div onClick={() => {this.props.addFavorite(jobCard.id); this.props.jobCardId(jobCard.id) }}>
                                    <SaveToFavoriteButton />
                                </div>}
                            </div>
                        </div>
                        <div className={styles.jobCard}>
                            <div className={styles.cardTop}>
                                <div className={styles.title}> {jobCard.jobTitle} </div>
                                <div className={styles.logo}> <img src={jobCard.jobLogo} alt=""/> </div>
                            </div>
                            <ul>
                                <li className={styles.li}> <span> <RiMoneyDollarCircleFill/> </span> {jobCard.salary} <span> {jobCard.typeOfSalary} </span> </li>
                                <li className={styles.li}> <span> <FaBuilding/> </span> {jobCard.сompanyName} <div className={styles.comnyInfo}> {jobCard.mainBusiness}, {jobCard.employees} employees.  </div> </li>
                                <li className={styles.li}> <span> <MdLocationOn/> </span> {jobCard.location} </li>
                                <li> <span> <BsCheck/> </span> {jobCard.typeOfEmployment}. Work experience {jobCard.workExperience}. {jobCard.education}. </li>
                                <h2> Vacancy description </h2>
                                <li> {jobCard.description} </li>
                            </ul>
                        </div>
                    </div>                
                ))}
            </>
        )
    }
}