import { Header } from "../Header";
import { JobCards } from '../JobCards';
import React from 'react'
import styles from './EmployerPage.module.scss';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoIosArrowDropup } from 'react-icons/io';
import { GrSearch } from 'react-icons/gr';

const employmentFilter = [
    {employment: 'Full employment', id: '1'},
    {employment: 'Underemployment', id: '2'},
]
const experienceFilter = [
    {experience: 'Without experience', id: '1'},
    {experience: 'Half a year experience', id: '2'},
    {experience: 'Year experience', id: '3'},
    {experience: '2 years experience', id: '4'},
    {experience: '2-5 years experience', id: '5'},
    {experience: '5 years experience and more', id: '6'},
]
const edukationFilter = [
    {edukation: 'Technical College', id: '1'},
    {edukation: 'Incomplete higher', id: '2'},
    {edukation: 'Complete higher', id: '3'},
]

export class EmployerPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterDropdawn: false,
        }
    }
    render() {
        return (
            <>
                <div>
                    <Header/>
                </div>
                    <div className={styles.topContainer}>
                        <div className={styles.inputContainer}>
                            <div className={styles.GrSearch}> <GrSearch /> </div>
                            <input placeholder="Enter job title" />
                            <button> Search </button>
                        </div>
                        <div className={styles.dropdawnContainer} >
                            <div className={styles.dropdawn} onClick={()=>{this.setState({filterDropdawn: !this.state.filterDropdawn})}}> Advanced search <span> {this.state.filterDropdawn ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>} </span> </div>
                            {this.state.filterDropdawn && <div className={styles.dropdawnMenu}> 
                                    <ul>
                                        {employmentFilter.map((employment) => (
                                        <li key={employment.id} onClick={() => this.props.filterEmployment(employment.employment)}> {employment.employment} </li>))}
                                        {experienceFilter.map((experience) => (
                                        <li key={experience.id} onClick={() => this.props.filterExperience(experience.experience)}> {experience.experience} </li>))}
                                        {edukationFilter.map((edukation) => (
                                        <li key={edukation.id} onClick={() => this.props.filterEdukation(edukation.edukation)}> {edukation.edukation} </li>))}
                                    </ul>
                                </div>}
                        </div>
                    </div>
                <div>
                    <JobCards hideCard={this.props.hideCard} isFavorite={this.props.isFavorite}  jobCards={this.props.jobCards} jobCardId={this.props.jobCardId} addFavorite={this.props.addFavorite} deleteFavorite={this.props.deleteFavorite} />
                </div>
            </>
        )
    }
}
