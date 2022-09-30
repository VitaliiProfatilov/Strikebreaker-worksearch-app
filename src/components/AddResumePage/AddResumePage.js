import styles from './AddResumePage.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { LogoRevers } from '../ReversLogo';
import { Footer } from '../Footer';

export class AddResume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jobPosition: '',
            salary: '',
            cityToWork: '',
            experience: '',
            education: '',
            photo: '',
            description: '',
            firstName: '',
            lastName: '',
            age: '',
            jobPositionEror: '',
            cityToWorkEror: '',
            experienceEror: '',
            educationEror: '',
            descriptionEror: '',
            firstNameEror: '',
            lastNameEror: '',
            ageEror: '',
            id: '',
            data: false,
            link: '/AddResume',
        }
    this.emptyInputEror = this.emptyInputEror.bind(this)
    this.goHome = this.goHome.bind(this)
    }
    render() {
        return (
            <div className={styles.container}>
                <LogoRevers/>
                <div className={styles.cardConteiner}>
                    <h2> Resume characteristics </h2>
                    <form>
                        <div>
                            <label> Career objective <span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: street cleaner' onChange={(e) => this.setState({ jobPosition: e.target.value })} value={this.state.jobPosition}></input>
                            <div> {this.state.jobPositionEror} </div>
                        </div>
                        <div>
                            <label> City <span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: Kyiv, Ukraine.' onChange={(e) => this.setState({ cityToWork: e.target.value })} value={this.state.cityToWork}></input>
                            <div> {this.state.cityToWorkEror} </div>
                        </div>
                        <div>
                            <label> Your experience <span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: 5 years in office' onChange={(e) => this.setState({ experience: e.target.value })} value={this.state.experience}></input>
                            <div> {this.state.experienceEror} </div>
                        </div>
                        <div>
                            <label> Your education <span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: Master in economics' onChange={(e) => this.setState({ education: e.target.value })} value={this.state.education}></input>
                            <div> {this.state.educationEror} </div>
                        </div>
                        <div>
                            <label> First name <span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: Bob' onChange={(e) => this.setState({ firstName: e.target.value })} value={this.state.firstName}></input>
                            <div> {this.state.firstNameEror} </div>
                        </div>
                        <div>
                            <label> Last name <span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: Ross' onChange={(e) => this.setState({ lastName: e.target.value })} value={this.state.lastName}></input>
                            <div> {this.state.lastNameEror} </div>
                        </div>
                        <div>
                            <label> Your age <span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: 38' onChange={(e) => this.setState({ age: e.target.value })} value={this.state.age}></input>
                            <div> {this.state.ageEror} </div>
                        </div>
                        <div>
                            <label> Desired salary: </label> 
                            <input maxLength="50" placeholder='For example: 300$' onChange={(e) => this.setState({ salary: e.target.value })} value={this.state.salary}></input>
                        </div>
                        <div>
                            <label> Photo URL: </label> 
                            <input maxLength="50" onChange={(e) => this.setState({ photo: e.target.value })} value={this.state.photo}></input>
                        </div>
                        <div>
                            <label> Describe your skills <span>*</span>: </label> 
                            <textarea placeholder='For example: assiduous, stubborn, industrious, etc.' onChange={(e) => this.setState({ description: e.target.value })} value={this.state.description}></textarea>
                            <div> {this.state.descriptionEror} </div>
                        </div>
                    </form>
                </div>
                <div>
                    <Link className={styles.Link} onClick={() => { if (this.state.data === true) {(this.state.id === '' ? this.props.onAdd : this.props.onEdit) ({
                        jobPosition: this.state.jobPosition,
                        salary: this.state.salary,
                        cityToWork: this.state.cityToWork,
                        experience: this.state.experience,
                        education: this.state.education,
                        photo: this.state.photo,
                        description: this.state.description,
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        age: this.state.age,
                        id: this.state.id,
                    })}; this.emptyInputEror(); }} onMouseEnter={this.goHome} to={this.state.link} >{this.state.id === '' ? 'Add' : 'Save'}</Link>
                </div>
                <Footer/>
            </div>
        )
    }
    emptyInputEror() {
        if (this.state.jobPosition === '') {this.setState({jobPositionEror: 'Please enter a career objective'})} else {this.setState({jobPositionEror: ''})};
        if (this.state.cityToWork === '') {this.setState({cityToWorkEror: 'Please enter the city, where you want to work'})} else {this.setState({cityToWorkEror: ''})};
        if (this.state.experience === '') {this.setState({experienceEror: 'Please enter your experience'})} else {this.setState({experienceEror: ''})};
        if (this.state.education === '') {this.setState({educationEror: 'Please enter your education'})} else {this.setState({educationEror: ''})};
        if (this.state.description === '') {this.setState({descriptionEror: 'Please enter description of your skills'})} else {this.setState({descriptionEror: ''})};
        if (this.state.firstName === '') {this.setState({firstNameEror: 'Please enter your first name'})} else {this.setState({firstNameEror: ''})};
        if (this.state.lastName === '') {this.setState({lastNameEror: 'Please enter your last name'})} else {this.setState({lastNameEror: ''})};
        if (this.state.age === '') {this.setState({ageEror: 'Please enter your age'})} else {this.setState({ageEror: ''})};
    }
    goHome() {
        if (this.state.jobPosition === '') {this.setState({data: false}); this.setState({link: '/AddResume'})} 
        else if(this.state.cityToWork === '') {this.setState({data: false}); this.setState({link: '/AddResume'})} 
        else if(this.state.experience === '') {this.setState({data: false}); this.setState({link: '/AddResume'})} 
        else if(this.state.education === '') {this.setState({data: false}); this.setState({link: '/AddResume'})} 
        else if(this.state.description === '') {this.setState({data: false}); this.setState({link: '/AddResume'})} 
        else if(this.state.firstName === '') {this.setState({data: false}); this.setState({link: '/AddResume'})} 
        else if(this.state.lastName === '') {this.setState({data: false}); this.setState({link: '/AddResume'})}
        else if(this.state.age === '') {this.setState({data: false}); this.setState({link: '/AddResume'})}
        else {
            this.setState({data: true});
            this.setState({link: '/applicant'});
        }
    }
    componentDidMount() {
        this.props.resumeCard.map((resumeCard) => ( 
            this.setState({
            jobPosition: resumeCard.jobPosition,
            salary: resumeCard.salary,
            cityToWork: resumeCard.cityToWork,
            experience: resumeCard.experience,
            education: resumeCard.education,
            photo: resumeCard.photo,
            description: resumeCard.description,
            firstName: resumeCard.firstName,
            lastName: resumeCard.lastName,
            age: resumeCard.age,
            id: resumeCard.id,
    })))} 
}