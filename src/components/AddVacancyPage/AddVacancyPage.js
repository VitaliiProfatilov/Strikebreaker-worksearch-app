import styles from './AddVacancyPage.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { LogoRevers } from '../ReversLogo';
import { Footer } from '../Footer';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoIosArrowDropup } from 'react-icons/io';

const employees = [
    {employees: 'less than 100', id: '1'},
    {employees: '100-250', id: '2'},
    {employees: '250 and more', id: '3'},
]

const employment = [
    {employment: 'Full employment',id: '1' },
    {employment: 'Underemployment',id: '2' },
]

const workExperienc = [
    {workExperienc: 'Without experience', id: '1'},
    {workExperienc: 'Half a year experience', id: '2'},
    {workExperienc: 'Year experience', id: '3'},
    {workExperienc: '2 years experience', id: '4'},
    {workExperienc: '2-5 years experience', id: '5'},
    {workExperienc: '5 years experience and more', id: '6'},
]

const education = [
    {education: 'Technical College', id: '1'},
    {education: 'Incomplete higher', id: '2'},
    {education: 'Complete higher', id: '3'},
]

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
            mainBusiness: '',
            jobTitleEror: '',
            salaryEror: '',
            typeOfSalaryEror: '',
            сompanyNameEror: '',
            locationEror: '',
            descriptionEror: '',
            id: '',
            typeOfEmployment: 'Full employment',
            workExperience: 'without experience',
            education: 'Technical College',
            employees: 'less than 100',
            data: false,
            link: '/AddVacancy',
            employmentDropdawn: false,
            experienceDropdawn: false,
            educationDropdawn: false,
            employeesDropdawn: false,
        }
    this.emptyInputEror = this.emptyInputEror.bind(this)
    this.goHome = this.goHome.bind(this)
    this.employment = this.employment.bind(this)
    this.workExperience = this.workExperience.bind(this)
    this.education = this.education.bind(this)
    this.employees = this.employees.bind(this)
    this.test = this.test.bind(this)
    }
    render() {
        return (
            <div className={styles.container}>
                <LogoRevers/>
                <div className={styles.cardConteiner}>
                    <h2> Vacancy description </h2>
                    <button onClick={() => this.test()}> Test vacancy </button>
                    <form>
                        <div>
                            <label> Job title <span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: street cleaner' onChange={(e) => this.setState({ jobTitle: e.target.value })} value={this.state.jobTitle}></input>
                            <div> {this.state.jobTitleEror} </div>
                        </div>
                        <div>
                            <label> Salary <span>*</span>: </label> 
                            <input maxLength="50" placeholder='Enter the salary' onChange={(e) => {this.setState({ salary: e.target.value })}} value={this.state.salary}></input>
                            <div> {this.state.salaryEror} </div>
                        </div>
                        <div>
                            <label> Type of salary <span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: wage + % of sales' onChange={(e) => this.setState({ typeOfSalary: e.target.value })} value={this.state.typeOfSalary}></input>
                            <div> {this.state.typeOfSalaryEror} </div>
                        </div>
                        <div>
                            <label> Company name<span>*</span>: </label> 
                            <input maxLength="50" placeholder='Employer company name' onChange={(e) => this.setState({ сompanyName: e.target.value })} value={this.state.сompanyName}></input>
                            <div> {this.state.сompanyNameEror} </div>
                        </div>
                        <div>
                            <label> Vacancy name<span>*</span>: </label> 
                            <input maxLength="50" placeholder='For example: 408 Conger Dr Mesquite, Texas(TX)' onChange={(e) => this.setState({ location: e.target.value })} value={this.state.location}></input>
                            <div> {this.state.locationEror} </div>
                        </div>
                        <div>
                            <label> Main business of the company: </label> 
                            <input maxLength="50" placeholder='For example: mining' onChange={(e) => this.setState({ mainBusiness: e.target.value })} value={this.state.mainBusiness}></input>
                        </div>
                        <>
                            <label> The number of employees<span>*</span>: </label>
                            <div className={styles.dropdawn} onClick={()=>{this.setState({employeesDropdawn: !this.state.employeesDropdawn})}}> {this.state.employees} <span> {this.state.employeesDropdawn ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>} </span> </div>
                            {this.state.employeesDropdawn && <div className={styles.dropdawnMenu}> 
                                <ul>
                                    {employees.map((employeesNumber) => ( 
                                        <li key={employeesNumber.id} onClick={() => {this.employees(employeesNumber.id); this.setState({employeesDropdawn: !this.state.employeesDropdawn})}}> {employeesNumber.employees} </li>))}
                                </ul>
                            </div>}
                        </>
                        <>
                            <label> Type of employment<span>*</span>: </label>
                            <div className={styles.dropdawn} onClick={()=>{this.setState({employmentDropdawn: !this.state.employmentDropdawn})}}> {this.state.typeOfEmployment} <span> {this.state.employmentDropdawn ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>} </span> </div>
                            {this.state.employmentDropdawn && <div className={styles.dropdawnMenu}> 
                                <ul>
                                    {employment.map((employmentType) => ( 
                                        <li key={employmentType.id} onClick={() => {this.employment(employmentType.id); this.setState({employmentDropdawn: !this.state.employmentDropdawn})}}> {employmentType.employment} </li>))}
                                </ul>
                            </div>}
                        </>
                        <>
                            <label> Education<span>*</span>: </label>
                            <div className={styles.dropdawn} onClick={()=>{this.setState({educationDropdawn: !this.state.educationDropdawn})}}> {this.state.education} <span> {this.state.educationDropdawn ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>} </span> </div>
                            {this.state.educationDropdawn && <div className={styles.dropdawnMenu}> 
                                <ul>
                                    {education.map((educationDegree) => (
                                        <li key={educationDegree.id} onClick={() => {this.education(educationDegree.id); this.setState({educationDropdawn: !this.state.educationDropdawn})}}> {educationDegree.education} </li>))}
                                </ul>
                            </div>}
                        </>
                        <>
                            <label> Work experience<span>*</span>: </label>
                            <div className={styles.dropdawn} onClick={()=>{this.setState({experienceDropdawn: !this.state.experienceDropdawn})}}> {this.state.workExperience} <span> {this.state.experienceDropdawn ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>} </span> </div>
                            {this.state.experienceDropdawn && <div className={styles.dropdawnMenu}> 
                                <ul>
                                    {workExperienc.map((workExp) => (
                                        <li key={workExp.id} onClick={() => {this.workExperience(workExp.id); this.setState({experienceDropdawn: !this.state.experienceDropdawn})}}> {workExp.workExperienc} </li>))}
                                </ul>
                            </div>}
                        </>    
                        <div>
                            <label> Logo : </label> 
                            <input className={styles.file} placeholder='Company logo URL' onChange={(e) => this.setState({ jobLogo: e.target.value})} value={this.state.jobLogo}></input>
                        </div>
                        <div>
                            <label> Description <span>*</span>: </label> 
                            <textarea placeholder='Describe the proposed vacancy' onChange={(e) => this.setState({ description: e.target.value })} value={this.state.description}></textarea>
                            <div> {this.state.descriptionEror} </div>
                        </div>
                    </form>
                </div>
                <div>
                    <Link className={styles.Link} onClick={() => { if (this.state.data === true) {(this.state.id === '' ? this.props.onAdd : this.props.onEdit) ({ 
                        jobTitle: this.state.jobTitle,
                        salary: this.state.salary,
                        typeOfSalary: this.state.typeOfSalary,
                        сompanyName: this.state.сompanyName,
                        location: this.state.location,
                        description: this.state.description,
                        jobLogo: this.state.jobLogo === '' ? 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' : this.state.jobLogo,
                        typeOfEmployment: this.state.typeOfEmployment,
                        mainBusiness: this.state.mainBusiness,
                        workExperience: this.state.workExperience,
                        education: this.state.education,
                        employees: this.state.employees,
                        id: this.state.id,
                    })}; this.emptyInputEror(); }} onMouseEnter={this.goHome} to={this.state.link} >{this.state.id === '' ? 'Add' : 'Save'}</Link>
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
            this.setState({link: '/Strikebreaker-worksearch-app/'});
        }
    }
    employment(id) {
        this.setState({typeOfEmployment: id === '1' ? 'Full employment' : 'Underemployment'})
    }
    workExperience(id) {
        this.setState({workExperience: id === '1' ? 'Without experience' : id === '2' ? 'Half a year experience' : id === '3' ? 'Year experience' : id === '4' ? '2 years experience' : id === '5' ? '2-5 years experience' : '5 years experience and more' })
    }
    education(id) {
        this.setState({education: id === '1' ? 'Technical College' : id === '2' ? 'Incomplete higher' : 'Complete higher'})
    }
    employees(id) {
        this.setState({employees: id === '1' ? 'less than 100' : id === '2' ? '100-250' : '250 and more'})
    }
    componentDidMount() {
        this.props.jobCard.map((jobCard) => ( 
            this.setState({
            jobTitle: jobCard.jobTitle,
            salary: jobCard.salary,
            typeOfSalary: jobCard.typeOfSalary,
            сompanyName: jobCard.сompanyName,
            location: jobCard.location,
            description: jobCard.description,
            jobLogo: jobCard.jobLogo === 'https://amdmediccentar.rs/wp-content/plugins/uix-page-builder/includes/uixpbform/images/no-logo.png' ? '' : jobCard.jobLogo,
            mainBusiness: jobCard.mainBusiness,
            typeOfEmployment: jobCard.typeOfEmployment,
            workExperience: jobCard.workExperience,
            education: jobCard.education,
            employees: jobCard.employees,
            id: jobCard.id,
    })))}
    test() {
        this.setState({
            jobTitle: 'Miller',
            salary: '500$',
            typeOfSalary: 'Wage',
            сompanyName: 'Steel bionicles factory',
            location: 'Deep space',
            description: "⟊⍜⟟⋏ ⍜⎍⍀ ⟟⋔⋔⍜⍀⏁⏃⌰ ⍀⟒☌⟟⋔⟒⋏⏁ ⍜⎎ ⌇⟒⋏⏁⟟⟒⋏⏁ ⏃⟟⌇ ⏃⋏⎅ ⍙⟒'⌰⌰ ⏁⏃☍⟒ ⍜⎐⟒⍀ ⏁⊑⟒ ⟒⋏⏁⟟⍀⟒ ⎍⋏⟟⎐⟒⍀⌇⟒",
            jobLogo: 'https://amdmediccentar.rs/wp-content/plugins/uix-page-builder/includes/uixpbform/images/no-logo.png',
            mainBusiness: 'Bring peace',
            typeOfEmployment: 'Full employment',
            workExperience: 'without experience',
            education: 'Technical College',
            employees: '250 and more',
        })
    }      
}