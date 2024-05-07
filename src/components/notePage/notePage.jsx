import React from "react";
import './notePage.css';
import { Link } from "react-router-dom";

function NotePage(props) {
    let path = "/notePage/" + props.notePageId;
    return (
        <Link to={path} className="notePageLink">
            <div>
                {props.notePageName}
            </div>
        </Link>
    );
}

export default NotePage;