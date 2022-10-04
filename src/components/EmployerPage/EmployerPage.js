import { Header } from "../Header";
import { JobCards } from '../JobCards';
import React from 'react'
import styles from './EmployerPage.module.scss';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoIosArrowDropup } from 'react-icons/io';
import { GrSearch } from 'react-icons/gr';
import { GrPowerReset } from 'react-icons/gr';

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
const educationFilter = [
    {education: 'Technical College', id: '1'},
    {education: 'Incomplete higher', id: '2'},
    {education: 'Complete higher', id: '3'},
]

export class EmployerPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterDropdawn: false,
            jobCards: this.props.jobCards,
            employment: '',
            experience: '',
            education: '',
            isActiveEmployment: '',
            isActiveExperience: '',
            isActiveEducation: '',
            search: '',
            isSearch: false,
        }
    this.filtered = this.filtered.bind(this);
    this.reset = this.reset.bind(this);
    }
    render() {
        return (
            <>
                <div>
                    <Header editResume={this.props.editResume}/>
                </div>
                    <div className={styles.topContainer}>
                        <div className={styles.inputContainer}>
                            <div className={styles.GrSearch}> <GrSearch /> </div>
                            <input maxLength="50" placeholder="Enter job title" onChange={(event) => this.setState({search: event.target.value})} />
                            <button onClick={() => this.filtered()}> Search </button>
                        </div>
                        <div className={styles.dropdawnContainer} >
                            <div className={styles.dropdawn} onClick={()=>{this.setState({filterDropdawn: !this.state.filterDropdawn})}}> Advanced search <span> {this.state.filterDropdawn ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>} </span> </div>
                            {this.state.filterDropdawn && <div className={styles.dropdawnMenu}> 
                                <ul>
                                    <div>
                                        {employmentFilter.map((employment) => (
                                        <li key={employment.id} onClick={() => {this.setState({employment: employment.employment, isActiveEmployment: employment.id })}} className={`${this.state.isActiveEmployment === employment.id && styles.active}`}> {employment.employment} </li>))}
                                    </div>
                                    <div>
                                        {experienceFilter.map((experience) => (
                                        <li key={experience.id} onClick={() => {this.setState({experience: experience.experience, isActiveExperience: experience.id })}} className={`${this.state.isActiveExperience === experience.id && styles.active}`}> {experience.experience} </li>))}
                                    </div>
                                    <div>
                                        {educationFilter.map((education) => (
                                        <li key={education.id}  onClick={() => {this.setState({education: education.education, isActiveEducation: education.id })}} className={`${this.state.isActiveEducation === education.id && styles.active}`}> {education.education} </li>))}
                                    </div>
                                </ul>
                                <div className={styles.buttonContainer}>
                                    <button onClick={() => {this.filtered(); this.setState({filterDropdawn: !this.state.filterDropdawn})}}> Search </button>
                                    <button onClick={() => this.reset()}> <GrPowerReset/> </button>
                                </div>
                            </div>}
                        </div>
                    </div>
                {this.state.jobCards.length !== 0 ? <div>
                    <JobCards hideCard={this.props.hideCard} isFavorite={this.props.isFavorite}  jobCards={this.state.jobCards} jobCardId={this.props.jobCardId} addFavorite={this.props.addFavorite} deleteFavorite={this.props.deleteFavorite} />
                </div> : <div className={styles.cardsContainer}>
                    <span> No results </span>
                </div>
                }
            </>
        )
    }
    filtered() {
        let dataFilterOne = '';
        let dataFilterTwo = '';
        let dataFilterThree = '';
        let dataFilterFour = '';
        let data = this.props.jobCards;
        if (this.state.employment === '') {dataFilterOne = data} else {
            dataFilterOne = data.filter((el) => el.typeOfEmployment === this.state.employment )};
        if (this.state.experience === '') {dataFilterTwo = dataFilterOne} else {
            dataFilterTwo = dataFilterOne.filter((el) => el.workExperience === this.state.experience )};
        if (this.state.education === '') {dataFilterThree = dataFilterTwo} else {
            dataFilterThree = dataFilterTwo.filter((el) => el.education === this.state.education )};
        if (this.state.search === '') {dataFilterFour = dataFilterThree} else {
            dataFilterFour = dataFilterThree.filter((el) => el.jobTitle.toLowerCase().includes(this.state.search.toLowerCase()))};
        this.setState({jobCards: dataFilterFour});
    }
    reset() {
        this.setState({
            employment: '', 
            experience: '', 
            education: '', 
            isActiveEmployment: '', 
            isActiveExperience: '', 
            isActiveEducation: '',
        })
    }
}