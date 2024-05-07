import React from "react";
import './user.css';
import UserIcon from '../../data/shrekAva.jpg';
import { Link } from "react-router-dom";

function User(props) {
    return (
        <Link to="/profile/" className="userDiv">
            <div className="userPic">
                <img src={UserIcon} alt="ava" className="avatarImg"></img>
            </div>
            <div className="userLogin">
                <span className="login">{props.login}</span>
            </div>
        </Link>
    );
}

export default User;