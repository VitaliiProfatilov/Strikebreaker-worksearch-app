import { EmployerPage } from './components/EmployerPage';
import { ApplicantPage } from './components/ApplicantPage';
import { AddVacancy } from './components/AddVacancyPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CorporationLogo from './img/CorporationLogo.png';
import RestaurantLogo from './img/RestaurantLogo.png';
import { VacancyPage } from './components/VacancyPage';
import { FavoritePage } from './components/FavoritePage';

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
          workExperience: '2-5 years',
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
        }
      ],
      jobCard: [],
      favorite: [],
      editCard: [],
    }
  this.addJobCard = this.addJobCard.bind(this);
  this.onPush = this.onPush.bind(this);
  this.addFavorite = this.addFavorite.bind(this);
  this.deleteFavorite = this.deleteFavorite.bind(this);
  this.hideCard = this.hideCard.bind(this);
  this.showCard = this.showCard.bind(this);
  this.onEdit = this.onEdit.bind(this);
  this.edit = this.edit.bind(this);
  }
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<EmployerPage showCard={this.showCard} hideCard={this.hideCard} jobCards={this.state.jobCards} jobCardId={this.onPush} addFavorite={this.addFavorite} deleteFavorite={this.deleteFavorite} />} />
          <Route path='Applicant' element={<ApplicantPage edit={this.edit} />} />
          <Route path='AddVacancy' element={<AddVacancy onEdit={this.onEdit} onAdd={this.addJobCard} jobCard={this.state.jobCard}/>} />
          <Route path='VacancyPage' element={<VacancyPage jobCard={this.state.jobCard} deleteFavorite={this.deleteFavorite} addFavorite={this.addFavorite} jobCardId={this.onPush}/>} />
          <Route path='Favorite' element={<FavoritePage showCard={this.showCard} hideCard={this.hideCard} jobCards={this.state.favorite} jobCardId={this.onPush} deleteFavorite={this.deleteFavorite} addFavorite={this.addFavorite}/>}/>
          
        </Routes>
      </>
    )
  }
  //<Route path="*" element={NotFound}>
  addJobCard(newJobCard) {
    newJobCard.id = this.state.jobCards.length + 1;
    const isFavorite = false;
    const isHidden = false;
    this.setState({jobCards: [...this.state.jobCards, {isFavorite, isHidden, ...newJobCard}]})
  }
  onPush(id) {
    this.setState({jobCard: this.state.jobCards.filter((el) => el.id === id)})
  }
  addFavorite(id) {
    const isFavorite = true;
    let isInArray = false;
    let jobCardsIsFavorite = this.state.jobCards;
    jobCardsIsFavorite[id-1].isFavorite = isFavorite;
    //console.log(this.state.jobCards)
    this.state.favorite.forEach(el=>{
      if(el.id === id) 
        isInArray = true
    })
    if(!isInArray)
      this.setState({favorite: [...this.state.favorite, ...this.state.jobCards.filter((el) => el.id === id)]});
  }
  deleteFavorite(id) {
    const isFavorite = false;
    let jobCardsNotFavorite = this.state.jobCards;
    jobCardsNotFavorite[id-1].isFavorite = isFavorite;
    this.setState({favorite: this.state.favorite.filter((el) => el.id !== id)})
  }
  hideCard(id) {
    const isHidden = true;
    let jobCardsIsHidden = this.state.jobCards;
    jobCardsIsHidden[id-1].isHidden = isHidden;
    this.setState({})
    console.log(this.state.jobCards)
  }
  showCard(id) {
    const isHidden = false;
    let jobCardsNotHidden = this.state.jobCards;
    jobCardsNotHidden[id-1].isHidden = isHidden;
    this.setState({})
  }
  edit() {
    this.setState({jobCard: []})
  }
  onEdit(editElement) {
    let jobCardsIsEdit = this.state.jobCards;
    jobCardsIsEdit[editElement.id-1] = editElement;
    this.setState({})
  }
}

