import styles from './AddVacancyPage.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { LogoRevers } from '../ReversLogo';
import { Footer } from '../Footer';

export class AddVacancy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jobTitle: '',
            salary: '',
            typeOfSalary: '',
            сompanyName: '',
            location: '',
            description: '',
            jobLogo: '',
            jobTitleEror: '',
            salaryEror: '',
            typeOfSalaryEror: '',
            сompanyNameEror: '',
            locationEror: '',
            descriptionEror: '',
            data: false,
            link: '/AddVacancy',
        }
    this.emptyInputEror = this.emptyInputEror.bind(this)
    this.goHome = this.goHome.bind(this)
    }
    render() {
        return (
            <div className={styles.container}>
                <LogoRevers/>
                <div className={styles.vacancyConteiner}>
                    <h2> Vacancy description </h2>                    
                    <form className={styles.vacancyForm}>
                        <div>
                            <label> Job title <span>*</span>: </label> 
                            <input placeholder='For example: street cleaner' onChange={(e) => this.setState({ jobTitle: e.target.value })}></input>
                            <div> {this.state.jobTitleEror} </div>
                        </div>
                        <div>
                            <label> Salary <span>*</span>: </label> 
                            <input placeholder='Enter the salary' onChange={(e) => {this.setState({ salary: e.target.value })}}></input>
                            <div> {this.state.salaryEror} </div>
                        </div>
                        <div>
                            <label> Type of salary <span>*</span>: </label> 
                            <input placeholder='For example: wage + % of sales' onChange={(e) => this.setState({ typeOfSalary: e.target.value })}></input>
                            <div> {this.state.typeOfSalaryEror} </div>
                        </div>
                        <div>
                            <label> Company name<span>*</span>: </label> 
                            <input placeholder='Employer company name' onChange={(e) => this.setState({ сompanyName: e.target.value })}></input>
                            <div> {this.state.сompanyNameEror} </div>
                        </div>
                        <div>
                            <label> Vacancy name<span>*</span>: </label> 
                            <input placeholder='For example: 408 Conger Dr Mesquite, Texas(TX)' onChange={(e) => this.setState({ location: e.target.value })}></input>
                            <div> {this.state.locationEror} </div>
                        </div>
                        <div>
                            <label> Logo : </label> 
                            <input className={styles.file} placeholder='Company logo URL' onChange={(e) => this.setState({ jobLogo: e.target.value})} />
                        </div>
                        <div>
                            <label> Description <span>*</span>: </label> 
                            <textarea placeholder='Describe the proposed vacancy' onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                            <div> {this.state.descriptionEror} </div>
                        </div>
                    </form>
                </div>
                <div>
                    <Link className={styles.Link} onClick={() => { if (this.state.data === true) {this.props.onAdd ({ 
                        jobTitle: this.state.jobTitle,
                        salary: this.state.salary,
                        typeOfSalary: this.state.typeOfSalary,
                        сompanyName: this.state.сompanyName,
                        location: this.state.location,
                        description: this.state.description,
                        jobLogo: this.state.jobLogo, 
                    })}; this.emptyInputEror(); }} onMouseEnter={this.goHome} to={this.state.link} > Add &gt; </Link>
                </div>
                <Footer/>
            </div>
        )
    }
    emptyInputEror() {
        if (this.state.jobTitle === '') {this.setState({jobTitleEror: 'Please enter a job title'})} else {this.setState({jobTitleEror: ''})};
        if (this.state.salary === '') {this.setState({salaryEror: 'Please enter salary'})} else {this.setState({salaryEror: ''})};
        if (this.state.typeOfSalary === '') {this.setState({typeOfSalaryEror: 'Please enter type of salary'})} else {this.setState({typeOfSalaryEror: ''})};
        if (this.state.сompanyName === '') {this.setState({сompanyNameEror: 'Please enter сompany name'})} else {this.setState({сompanyNameEror: ''})};
        if (this.state.location === '') {this.setState({locationEror: 'Please enter job location'})} else {this.setState({locationEror: ''})};
        if (this.state.description === '') {this.setState({descriptionEror: 'Please write a short description'})} else {this.setState({descriptionEror: ''})};
    }
    goHome() {
        if (this.state.jobTitle === '') {this.setState({data: false}); this.setState({link: '/AddVacancy'})} 
        else if(this.state.salary === '') {this.setState({data: false}); this.setState({link: '/AddVacancy'})} 
        else if(this.state.typeOfSalary === '') {this.setState({data: false}); this.setState({link: '/AddVacancy'})} 
        else if(this.state.сompanyName === '') {this.setState({data: false}); this.setState({link: '/AddVacancy'})} 
        else if(this.state.location === '') {this.setState({data: false}); this.setState({link: '/AddVacancy'})} 
        else if(this.state.description === '') {this.setState({data: false}); this.setState({link: '/AddVacancy'})} 
        else {
            this.setState({data: true});
            this.setState({link: '/'});
        }
    }
}