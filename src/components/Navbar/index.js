import { IoIosHome,IoIosLogOut } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

import './index.css'



const Header =()=>{
    return(
        <nav className="navbar">
            <div> 
                <h1 className="chat-feed">Chat / Feed chat</h1>
            </div>
            <div className="content-container">
            <div className="owner-container">
                  <IoIosHome className="home-icon"/>
                  <h1 className='owner'>Process Owner HOD</h1>
            </div>
            <div className="admin-container">
                <h1 className="admin">Admin</h1>
                <h1 className="admin-name">Palak Bansal</h1>
                <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733046278/Ellipse_3855_xstz9c.png" alt='avatar' className="avatar-icon"/> 
            </div>
            <div className="admin-container">
                <CiSettings className="settings-icon"/>
            </div>
                <div className="logout-container">
                <IoIosLogOut className="logout-icon"/>
                <button type='button' className="logout-button">Logout</button>
            </div>
            </div>
        </nav>
    )
}


export default Header