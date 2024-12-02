import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './index.css'

const Users=()=>{
    return(
        <div className="users-container">
            <div className="user-container">
                <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733059364/Frame_1171287398_uoogp5.png" alt="users" className="user-image"/>
                <h1 className="user-name">Cheyenne Bergson</h1>
            </div>
            <div className="user-container">
                <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733059364/Frame_1171287398_uoogp5.png" alt="users" className="user-image"/>
                <h1 className="user-name">Jonathan Higgins</h1>
            </div>
            <div className="user-container">
                <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733059364/Frame_1171287398_uoogp5.png" alt="users" className="user-image"/>
                <h1 className="user-name">Capt. Trunk</h1>
            </div>
            <div className="user-container">
                <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733059364/Frame_1171287398_uoogp5.png" alt="users" className="user-image"/>
                <h1 className="user-name">Hannibal Smi..</h1>
                
            </div>
            <div className="user-container">
                <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733059364/Frame_1171287398_uoogp5.png" alt="users" className="user-image"/>
                <h1 className="user-name">Capt. Trunk</h1>
            </div>
            <div className="user-container">
                <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733059364/Frame_1171287398_uoogp5.png" alt="users" className="user-image"/>
                <h1 className="user-name">Hannibal Smi..</h1>
            </div>
            <div className='message-container'>
                <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733060869/comments_p7xhgd.png" alt="useres" className='message-image'/>
                <h1 className='message-name'> Messages</h1>
                <MdOutlineKeyboardArrowRight className="arrow-icon" />

            </div>

        </div>
    )
}

export default Users