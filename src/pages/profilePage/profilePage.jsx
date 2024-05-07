import React from 'react';
import './profilePage.css';
import SideBar from '../../components/sideBar/sideBar';
import { Link } from "react-router-dom";
import arrow from './arrow.png';
import UserIcon from '../../data/shrekAva.jpg'

function ProfilePage() {
    return (
        <div className='profilePage'>
            <Link to='/' className='linkHomePage'>
                <img src={arrow} className='imgHomePage'></img>
                <span>Назад к заметкам</span>
            </Link>

            <div className='userBlock'>
                <div className="userImg">
                    <img src={UserIcon} alt="ava" className="avatarPic"></img>
                </div>
                <div className="userlogin">
                    <span className="Login">LilShrek</span>                 {/*ПОМЕНЯТЬ НА ДАННЫЕ ИЗ БД*/}
                </div>
            </div>

        </div>
    );
}

export default ProfilePage;