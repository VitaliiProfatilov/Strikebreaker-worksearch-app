import { Header } from "../Header";
import { ResumeCards } from '../ResumeCards';
import React from 'react'
import styles from './ApplicantPage.module.scss';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoIosArrowDropup } from 'react-icons/io';
import { GrSearch } from 'react-icons/gr';

export class ApplicantPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterDropdawn: false,
        }
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
                            <input placeholder="Enter" />
                            <button> Search </button>
                        </div>
                        <div className={styles.dropdawnContainer} >
                            <div className={styles.dropdawn} onClick={()=>{this.setState({filterDropdawn: !this.state.filterDropdawn})}}> Advanced search <span> {this.state.filterDropdawn ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>} </span> </div>
                            {this.state.filterDropdawn && <div className={styles.dropdawnMenu}> 
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>}
                        </div>
                    </div>
                <div>
                    <ResumeCards hideCard={this.props.hideCard} resumeCards={this.props.resumeCards} resumeCardId={this.props.resumeCardId} addFavoriteResume={this.props.addFavoriteResume} deleteFavoriteResume={this.props.deleteFavoriteResume} />
                </div>
            </div>
        )
    }
}