import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage/homePage.jsx';
import NotePage from './components/notePage/notePage.jsx';
import ProfilePage from './pages/profilePage/profilePage.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  // return (
  //   <div className="App">
  //     <Sidebar></Sidebar>
  //     <header className="App-header">
  //     <NoteList></NoteList>
        
  //     </header>
  //   </div>
  // );


    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route path='/notePage/:id' element={<HomePage/>}></Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
        </Routes>
      </Router>
    );

}

export default App;
