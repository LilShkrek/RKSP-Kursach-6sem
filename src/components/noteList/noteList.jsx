import Note from "../note/note";
import './noteList.css';
import { notePages } from "../../data/noteArray";

function NoteList(props) {
    return (
        <div className="noteListBlock">
            <div className="noteList">
                {notePages[props.pageId - 1].notes.map(note=>(
                    <Note key={note.id} text={note.text}></Note>
                ))}
            </div>
        </div>
    );
}

export default NoteList;