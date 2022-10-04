import { Header } from "../Header";
import { ResumeCards } from '../ResumeCards';
import React from 'react'
import styles from './ApplicantPage.module.scss';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoIosArrowDropup } from 'react-icons/io';
import { GrSearch } from 'react-icons/gr';
import { GrPowerReset } from 'react-icons/gr';

const experienceFilter = [
    {experience: 'Without experience', id: '1'},
    {experience: 'Half a year experience', id: '2'},
    {experience: 'Year experience', id: '3'},
    {experience: '2 years experience', id: '4'},
    {experience: '2-5 years experience', id: '5'},
    {experience: '5 years experience and more', id: '6'},
]
export class ApplicantPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterDropdawn: false,
            resumeCards: this.props.resumeCards,
            experience: '',
            photo: '',
            isActiveExperience: '',
            isActivePhoto: false,
            search: '',
            isSearch: false,
        }
    this.filtered = this.filtered.bind(this);
    this.reset = this.reset.bind(this);
    }
    render() {
        return (
            <div>
                <div>
                    <Header editJob={this.props.editJob}/>
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
                                        {experienceFilter.map((experience) => (
                                        <li key={experience.id} onClick={() => {this.setState({experience: experience.experience, isActiveExperience: experience.id })}} className={`${this.state.isActiveExperience === experience.id && styles.active}`}> {experience.experience} </li>))}
                                    </div>
                                    <div>
                                        <li onClick={() => {this.setState({isActivePhoto: true, photo: 'Only with photo'})}} className={`${this.state.isActivePhoto && styles.active}`}> Only with photo </li>
                                    </div>
                                </ul>
                                <div className={styles.buttonContainer}>
                                    <button onClick={() => {this.filtered(); this.setState({filterDropdawn: !this.state.filterDropdawn})}}> Search </button>
                                    <button onClick={() => this.reset()}> <GrPowerReset/> </button>
                                </div>
                            </div>}
                        </div>
                    </div>
                {this.state.resumeCards.length !== 0 ? <div>
                   <ResumeCards hideCard={this.props.hideCard} resumeCards={this.state.resumeCards} resumeCardId={this.props.resumeCardId} addFavoriteResume={this.props.addFavoriteResume} deleteFavoriteResume={this.props.deleteFavoriteResume} />
                </div> : <div className={styles.cardsContainer}>
                    <span> No results </span>
                </div>
                }
            </div>
        )
    }
    filtered() {
        const noPhoto = 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png';
        let dataFilterOne = '';
        let dataFilterTwo = '';
        let dataFilterThree = '';
        let data = this.props.resumeCards;
        if (this.state.experience === '') {dataFilterOne = data} else {
            dataFilterOne = data.filter((el) => el.experience === this.state.experience )};
        if (this.state.photo === '') {dataFilterTwo = dataFilterOne} else {
            dataFilterTwo = dataFilterOne.filter((el) => el.photo !== noPhoto )};
        if (this.state.search === '') {dataFilterThree = dataFilterTwo} else {
            dataFilterThree = dataFilterTwo.filter((el) => el.jobPosition.toLowerCase() === this.state.search.toLowerCase())};
        this.setState({resumeCards: dataFilterThree});
    }
    reset() {
        this.setState({
            experience: '',
            photo: '',
            isActiveExperience: '',
            isActivePhoto: '',
        });
    }
}