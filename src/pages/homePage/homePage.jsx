import './homePage.css';
import NoteList from '../../components/noteList/noteList.jsx';
import Sidebar from '../../components/sideBar/sideBar.jsx';
import { useParams } from 'react-router-dom';

function HomePage() {
    const { id } = useParams();
    console.log(id);
    if (id === undefined) {
        return (
            <div className='homePage'>
                <Sidebar></Sidebar>
                <NoteList pageId="1"></NoteList>
            </div>  
        );
    }

    return (
        <div className='homePage'>
            <Sidebar></Sidebar>
            <NoteList pageId={id}></NoteList>
        </div>
    );
}

export default HomePage;