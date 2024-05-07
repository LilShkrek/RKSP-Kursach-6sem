import './sideBar.css';
import User from '../user/user.jsx';
import NotePage from '../notePage/notePage.jsx';

function SideBar() {
    return (
        <div className="sidebar">
            <User login="LilShrek"></User>
            <NotePage notePageName="tmp1" notePageId="1"></NotePage>
            <NotePage notePageName="tmp2" notePageId="2"></NotePage>
        </div>
    );
}

export default SideBar;