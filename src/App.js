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
          jobTitle: 'Chief Engineer',
          jobLogo: CorporationLogo,
          salary: '900$',
          typeOfSalary: 'Wage',
          сompanyName: 'Inc.Corp.',
          location: '9609 Johnson Ave Sherwood, Arkansas(AR)',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec pretium ipsum, ac fringilla urna. Duis sit amet eleifend ante, a facilisis sem. Ut eget leo tellus. Cras vitae bibendum felis, ultrices accumsan turpis. Vivamus finibus tellus sed tincidunt vehicula. Pellentesque eget tincidunt purus. Pellentesque blandit euismod fermentum. Duis malesuada nunc libero, vel tempus libero tristique ac. Vivamus quis purus convallis, hendrerit urna sed, bibendum risus. Nullam at ullamcorper felis. Aenean placerat rhoncus vehicula. Nunc mattis sem sit amet efficitur feugiat. Vivamus porttitor vulputate risus at ornare. Vestibulum iaculis ultrices ipsum eget tempus. Duis pulvinar egestas ullamcorper.',
          id: 1,
          isFavorite: false,
          isHidden: false,
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
        }
      ],
      jobCard: [],
      favorite: [],
    }
  this.addJobCard = this.addJobCard.bind(this);
  this.onPush = this.onPush.bind(this);
  this.addFavorite = this.addFavorite.bind(this);
  this.deleteFavorite = this.deleteFavorite.bind(this);
  this.hide = this.hide.bind(this);
  }
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<EmployerPage hide={this.hide} jobCards={this.state.jobCards} jobCardId={this.onPush} addFavorite={this.addFavorite} deleteFavorite={this.deleteFavorite} />} />
          <Route path='applicant' element={<ApplicantPage />} />
          <Route path='AddVacancy' element={<AddVacancy onAdd={this.addJobCard}/>} />
          <Route path='VacancyPage' element={<VacancyPage jobCard={this.state.jobCard}/>} />
          <Route path='Favorite' element={<FavoritePage hide={this.hide} jobCards={this.state.favorite} jobCardId={this.onPush} deleteFavorite={this.deleteFavorite} addFavorite={this.addFavorite}/>}/>
        </Routes>
      </>
    )
  }
  addJobCard(newJobCard) {
    const id = this.state.jobCards.length + 1;
    const isFavorite = false;
    const isHidden = false;
    this.setState({jobCards: [...this.state.jobCards, {id, isFavorite, isHidden, ...newJobCard}]})
  }
  onPush(id) {
    this.setState({jobCard: this.state.jobCards.filter((el) => el.id === id)})
  }
  addFavorite(id) {
    const isFavorite = true;
    let isInArray = false;
    let jobCardsIsFavorite = this.state.jobCards;
    jobCardsIsFavorite[id-1].isFavorite = isFavorite;
    this.state.favorite.forEach(el=>{
      if(el.id === id) 
        isInArray = true
    })
    if(!isInArray)
      this.setState({favorite: [...this.state.favorite, ...this.state.jobCards.filter((el) => el.id === id)]});
  }
  deleteFavorite(id) {
    const isFavorite = false;
    let jobCardsisFavorite = this.state.jobCards;
    jobCardsisFavorite[id-1].isFavorite = isFavorite;
    this.setState({favorite: this.state.favorite.filter((el) => el.id !== id)})
  }
  hide(id) {
    const isHidden = true;
    let jobCardsIsHidden = this.state.jobCards;
    jobCardsIsHidden[id-1].isHidden = isHidden;
  }
  show(id) {
    const isHidden = false;
    let jobCardsIsHidden = this.state.jobCards;
    jobCardsIsHidden[id-1].isHidden = isHidden;
  }
}

