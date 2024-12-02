import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { FaEnvelopeOpen } from "react-icons/fa";
import { MdOutlineArrowDropDown,MdOutlineRemoveRedEye } from "react-icons/md";
import { TiPin } from "react-icons/ti";
import { TbArrowBadgeRight } from "react-icons/tb";
import { IoCopyOutline } from "react-icons/io5";


import './index.css';


const ChatterBox = () => {
    return (
        <div className="messenger-container">
            <div className="ask-actura-container">
            <div className="ask-actura">
                <h1 className="ask-actura-name">Ask Actura</h1>
                <div className="whatsApp-container">
                    <FaEnvelopeOpen/>
                    <h1 className="whatsapp-name">WhatsApp</h1>
                    <MdOutlineArrowDropDown className="dropdown"/>
                </div>
                <div className="greetings-container">
                    <FaEnvelopeOpen/>
                    <h1 className="greetings-name">Greetings</h1>
                    <MdOutlineArrowDropDown className="dropdown"/>
                </div>
                </div>
                <div className="greeting-template-containers">
                    <h1 className="template-names">Greeting Template</h1>
                    <div className="copy-send-preview-container">
                    <div className="copy-send-container">
                        <IoCopyOutline/>
                        <h1>copy to send</h1>
                        </div>
                    <div className="preview-container">
                        <MdOutlineRemoveRedEye/>
                        <h1>Preview</h1>
                        </div>
                        </div>
                </div>
                <div className="input-container">
                    <input placeholder="Type a message..." type="text"/>
                    <TbArrowBadgeRight/>
                </div>
            </div>

            <div className="action-launcher-container">
                <h2 className="action-launcher-title">Action Launcher</h2>
                <div className="action-launcher-input-container">
                    <CiSearch size={20} className="search-icon" />
                    <input type="text" className="action-launcher-input" placeholder="Enter action here" />
                </div>
                <div className="action-buttons">
                    <button className="action-button">
                        <CiCirclePlus size={20} /> Add Actions
                    </button>
                    <button className="action-button">Free Reversal</button>
                    <button className="action-button">Retail Onboarding</button>
                    <button className="action-button">Address Update</button>
                </div>
            </div>
            <div className="case-name-container">
                <div className="pin-bar-container">
                <TiPin/>
                <h2 className="case-name-title">Case Favorite</h2>
                </div>
                <div className="favorite-containers">
                    <div className="favorite-item">
                        <h3 className="favorite-item-title">Lorem ipsum dolor sit amet consectetur. Et tincidunt</h3>
                    </div>
                    <div className="favorite-item-photo">
                        <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733062852/image_xqt6wp.png" alt="photo-display" className="photo-image" />
                        <h1 className="favorite-item-title">Photo</h1>
                    </div>
                    <div className="favorite-item">
                        <h3 className="favorite-item-title">Lorem ipsum dolor sit amet consectetur. Et tincidunt</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatterBox;