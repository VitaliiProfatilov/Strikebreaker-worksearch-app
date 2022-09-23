import { Header } from '../Header';
import React from 'react'
//import styles from './ApplicantPage.module.scss';
import { Link } from 'react-router-dom';

export class ApplicantPage extends React.Component {
    render() {
        return (
            <div>
                <Header edit={this.props.edit}/>
                <Link to="/">Home</Link>
            </div>
        )
    }
}