import { EmployerPage } from './components/EmployerPage';
import { ApplicantPage } from './components/ApplicantPage';
import { AddVacancy } from './components/AddVacancyPage';
import { AddResume } from './components/AddResumePage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CorporationLogo from './img/CorporationLogo.png';
import RestaurantLogo from './img/RestaurantLogo.png';
import { VacancyPage } from './components/VacancyPage';
import { ResumePage } from './components/ResumePage';
import { FavoritePage } from './components/FavoritePage';
import { NotFoundPage } from './components/NotFoundPage';

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resumeCards: [
        {
          jobPosition: 'Junior frontend developer',
          salary: '300$',
          cityToWork: 'Dnipro, Ukraine.',
          experience: 'Without experience',
          education: 'Master: electrical engineering, electromechanics.',
          photo: 'https://proza.ru/pics/2018/10/06/1085.jpg',
          description: 'Sed sit amet eros sit amet lectus interdum pulvinar. In viverra neque in rutrum euismod. Donec volutpat tincidunt elementum. Ut ut elementum ex. Maecenas pharetra mi vitae sagittis ornare. Phasellus erat nibh, tincidunt nec vulputate euismod, rutrum vitae risus. Nunc sed vehicula est. Vestibulum cursus tincidunt lectus vitae faucibus. Vestibulum lorem enim, egestas at lorem eget, auctor congue augue. In hac habitasse platea dictumst. Integer a pulvinar nunc. Aenean non mattis augue. Donec tincidunt varius erat id sodales. Fusce blandit ante id ipsum euismod, sit amet tempus massa eleifend. Vivamus in vulputate augue. Donec interdum arcu congue enim ultrices, eu auctor enim convallis. Sed eu risus nec elit facilisis maximus. Quisque vel arcu metus. Praesent sollicitudin leo ut nunc eleifend tristique. Praesent vitae magna ut magna convallis vulputate eu nec diam. Morbi a ultrices est. Nam pretium mollis mollis. Aenean porta sit amet urna at blandit. Ut tempus orci sed diam pellentesque, et luctus justo auctor. Cras eu iaculis neque. Sed rutrum neque est, in gravida ligula dictum id. Vivamus commodo nulla in turpis feugiat, sed fermentum massa congue.',
          firstName: 'Vitalii',
          lastName: 'Profatilov',
          age: '26',
          id: 1,
          isFavorite: false,
          isHidden: false,
        },
        {
          jobPosition: 'Street cleaner',
          salary: '250$',
          cityToWork: 'Kyiv, Ukraine.',
          experience: '2 years experience',
          education: 'Secondary education.',
          photo: 'https://www.meme-arsenal.com/memes/0699b7f404dfa7e0a1f6e71c08332969.jpg',
          description: 'Duis lobortis vehicula congue. Nunc scelerisque varius dolor ut gravida.',
          firstName: 'Johnny',
          lastName: 'Pitt',
          age: '31',
          id: 2,
          isFavorite: false,
          isHidden: false,
        },
      ],
      jobCards: [
        {          
          jobTitle: 'Chief engineer',
          jobLogo: CorporationLogo,
          salary: '900$',
          typeOfSalary: 'Wage',
          сompanyName: 'Inc.Corp.',
          location: '9609 Johnson Ave Sherwood, Arkansas(AR)',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec pretium ipsum, ac fringilla urna. Duis sit amet eleifend ante, a facilisis sem. Ut eget leo tellus. Cras vitae bibendum felis, ultrices accumsan turpis. Vivamus finibus tellus sed tincidunt vehicula. Pellentesque eget tincidunt purus. Pellentesque blandit euismod fermentum. Duis malesuada nunc libero, vel tempus libero tristique ac. Vivamus quis purus convallis, hendrerit urna sed, bibendum risus. Nullam at ullamcorper felis. Aenean placerat rhoncus vehicula. Nunc mattis sem sit amet efficitur feugiat. Vivamus porttitor vulputate risus at ornare. Vestibulum iaculis ultrices ipsum eget tempus. Duis pulvinar egestas ullamcorper.',
          id: 1,
          isFavorite: false,
          isHidden: false,
          mainBusiness: 'Сonstruction',
          typeOfEmployment: 'Full employment',
          workExperience: '2-5 years experience',
          education: 'Complete higher',
          employees: '250 and more',
        },
        {          
          jobTitle: 'Waiter',
          jobLogo: RestaurantLogo,
          salary: '500-800$',
          typeOfSalary: 'Wage + % of sales',
          сompanyName: 'Big Fat Burger',
          location: '55 Montrose Ave Summit, New Jersey(NJ)',
          description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Suspendisse sit amet ex erat. Aenean eros metus, vulputate vitae odio non, bibendum imperdiet sapien. Duis consequat diam sed tortor porta, eu vestibulum diam sollicitudin. Proin volutpat magna a leo laoreet ultricies.',
          id: 2,
          isFavorite: false,
          isHidden: false,
          mainBusiness: 'Service',
          typeOfEmployment: 'Underemployment',
          workExperience: 'Without experience',
          education: 'Technical College',
          employees: 'less than 100',
        },
      ],
      jobCard: [],
      resumeCard: [],
      favoriteJob: [],
      favoriteResume: [],
      editCard: [],
    }
  this.addJobCard = this.addJobCard.bind(this);
  this.addResumeCard = this.addResumeCard.bind(this);
  this.onPushJob = this.onPushJob.bind(this);
  this.onPushResume = this.onPushResume.bind(this);
  this.addFavoriteJob = this.addFavoriteJob.bind(this);
  this.deleteFavoriteJob = this.deleteFavoriteJob.bind(this);
  this.addFavoriteResume = this.addFavoriteResume.bind(this);
  this.deleteFavoriteResume = this.deleteFavoriteResume.bind(this);
  this.hideJobCard = this.hideJobCard.bind(this);
  this.hideResumeCard = this.hideResumeCard.bind(this);
  this.onEditJob = this.onEditJob.bind(this);
  this.onEditResume = this.onEditResume.bind(this);
  this.editJob = this.editJob.bind(this);
  this.editResume = this.editResume.bind(this);
  }
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<EmployerPage editResume={this.editResume} hideCard={this.hideJobCard} jobCards={this.state.jobCards} jobCardId={this.onPushJob} addFavorite={this.addFavoriteJob} deleteFavorite={this.deleteFavoriteJob} />} />
          <Route path='Applicant' element={<ApplicantPage editJob={this.editJob} hideCard={this.hideResumeCard} resumeCards={this.state.resumeCards} resumeCardId={this.onPushResume} addFavoriteResume={this.addFavoriteResume} deleteFavoriteResume={this.deleteFavoriteResume} />} />
          <Route path='AddVacancy' element={<AddVacancy onEdit={this.onEditJob} onAdd={this.addJobCard} jobCard={this.state.jobCard}/>} />
          <Route path='AddResume' element={<AddResume onEdit={this.onEditResume} onAdd={this.addResumeCard} resumeCard={this.state.resumeCard}/>} />
          <Route path='Vacancy' element={<VacancyPage jobCard={this.state.jobCard} deleteFavorite={this.deleteFavoriteJob} addFavorite={this.addFavoriteJob} />} />
          <Route path='Resume' element={<ResumePage resumeCard={this.state.resumeCard} deleteFavorite={this.deleteFavoriteResume} addFavorite={this.addFavoriteResume} />} />
          <Route path='Favorite' element={<FavoritePage hideCard={this.hideCard} jobCards={this.state.favoriteJob} resumeCards={this.state.favoriteResume} resumeCardId={this.onPushResume} jobCardId={this.onPushJob} deleteFavoriteJob={this.deleteFavoriteJob} addFavoriteJob={this.addFavoriteJob} deleteFavoriteResume={this.deleteFavoriteResume} addFavoriteResume={this.addFavoriteResume}/>}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </>
    )
  }
  addJobCard(newJobCard) {
    newJobCard.id = this.state.jobCards.length + 1;
    const isFavorite = false;
    const isHidden = false;
    this.setState({jobCards: [...this.state.jobCards, {isFavorite, isHidden, ...newJobCard}]})
  }
  addResumeCard(newResumeCard) {
    newResumeCard.id = this.state.resumeCards.length + 1;
    const isFavorite = false;
    const isHidden = false;
    this.setState({resumeCards: [...this.state.resumeCards, {isFavorite, isHidden, ...newResumeCard}]})
  }
  onPushJob(id) {
    this.setState({jobCard: this.state.jobCards.filter((el) => el.id === id)})
  }
  onPushResume(id) {
    this.setState({resumeCard: this.state.resumeCards.filter((el) => el.id === id)})
  }
  addFavoriteJob(id) {
    const isFavorite = true;
    let isInArray = false;
    let jobCardsIsFavorite = this.state.jobCards;
    jobCardsIsFavorite[id-1].isFavorite = isFavorite;
    this.state.favoriteJob.forEach(el=>{
      if(el.id === id) 
        isInArray = true
    })
    if(!isInArray)
      this.setState({favoriteJob: [...this.state.favoriteJob, ...this.state.jobCards.filter((el) => el.id === id)]});
  }
  addFavoriteResume(id) {
    const isFavorite = true;
    let isInArray = false;
    let resumeCardsIsFavorite = this.state.resumeCards;
    resumeCardsIsFavorite[id-1].isFavorite = isFavorite;
    this.state.favoriteResume.forEach(el=>{
      if(el.id === id) 
        isInArray = true
    })
    if(!isInArray)
      this.setState({favoriteResume: [...this.state.favoriteResume, ...this.state.resumeCards.filter((el) => el.id === id)]});
  }
  deleteFavoriteJob(id) {
    const isFavorite = false;
    let jobCardsNotFavorite = this.state.jobCards;
    jobCardsNotFavorite[id-1].isFavorite = isFavorite;
    this.setState({favoriteJob: this.state.favoriteJob.filter((el) => el.id !== id)})
  }
  deleteFavoriteResume(id) {
    const isFavorite = false;
    let resumeCardsNotFavorite = this.state.resumeCards;
    resumeCardsNotFavorite[id-1].isFavorite = isFavorite;
    this.setState({favoriteResume: this.state.favoriteResume.filter((el) => el.id !== id)})
  }
  hideJobCard(id) {
    let jobCardsIsHidden = this.state.jobCards;
    jobCardsIsHidden[id-1].isHidden = !jobCardsIsHidden[id-1].isHidden
    this.setState({})
  }
  hideResumeCard(id) {
    let resumeCardsIsHidden = this.state.resumeCards;
    resumeCardsIsHidden[id-1].isHidden = !resumeCardsIsHidden[id-1].isHidden
    this.setState({})
  }
  editJob() {
    this.setState({jobCard: []})
  }
  editResume() {
    this.setState({resumeCard: []})
  }
  onEditJob(editElement) {
    let jobCardsIsEdit = this.state.jobCards;
    jobCardsIsEdit[editElement.id-1] = editElement;
    this.setState({})
  }
  onEditResume(editElement) {
    let resumeCardsIsEdit = this.state.resumeCards;
    resumeCardsIsEdit[editElement.id-1] = editElement;
    this.setState({})
  }
}