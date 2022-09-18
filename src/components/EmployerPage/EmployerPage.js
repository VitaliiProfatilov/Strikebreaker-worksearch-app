import { Header } from "../Header";
import { JobCards } from '../JobCards';
import React from 'react'
//import styles from './EmployerPage.module.scss';

export class EmployerPage extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Header />
                </div>
                <div>
                    <JobCards hide={this.props.hide} isFavorite={this.props.isFavorite}  jobCards={this.props.jobCards} jobCardId={this.props.jobCardId} addFavorite={this.props.addFavorite} deleteFavorite={this.props.deleteFavorite} />
                </div>
            </>
        )
    }
}
