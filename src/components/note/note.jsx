import React from "react";
import './note.css';

function Note(props) {
    return (
        <div className='note'>
            <input type="checkbox"></input>
            <span className='noteText'>{props.text}</span>
        </div>
    );
}

export default Note;