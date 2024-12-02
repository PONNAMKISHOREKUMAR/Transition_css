import { RxCross2 } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
import { LuSendHorizonal } from "react-icons/lu";

import './index.css'

const ChatFlow = () => (
    <div className="conversation-container">
        <ul className='update-container'>
            <li className='list-details-1'>Conversation</li>
           
            <li className='list-details'>Address update </li>
            <RxCross2 />
            <li className='list-details'> Fee Reversal</li>
            <RxCross2 />
            <li className='list-details'> Reta</li>
            <button className='escalate-btn'>Escalate</button>
        </ul>
        <hr/>
        <div className="conversation-containers">
        <div className="conversation-sub-1">
            <p className='title-1'>Conversation</p>
            <p>Attachment</p>
        </div>
        <p className="conversation-sub-2">Lorem ipsum dolor sit amet consectetur.
             Et tincidunt odio vivamus ac aliquam. 
            Placerat maecenas quis ut elementum praesent imperdiet.
            </p>
        <div className='chat-container-1'>
            <div className='chat-container-2'>
                <button className='cd-button'>CD</button>
                <ul className='chat-container-3'>
                    <li className="chat-name">Rachel Adams</li>
                    <li className='chat-time'>9:08 PM · Recevied By WhatsApp 
                    <IoCheckmark className='mark' />
                    </li>
                </ul>
            </div>
        <BsThreeDots className='dots'/>
        </div>
            <p className="conversation-sub-2">Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus 
                ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. 
                Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum.
                 Molestie nam morbi id arcu volutpat arcu.
            </p>
            <div className='chat-container-1'>
            <div className='chat-container-2'>
                <button className='Hk-button'>HK</button>
                <ul className='chat-container-3'>
                    <li className="chat-name">You</li>
                    <li className='chat-time'>27 Jul, 2024 9:08 PM · Sent By WhatsApp 
                    <IoCheckmark className='mark' />
                    </li>
                </ul>
            </div>
        <BsThreeDots className='dots'/>
        </div>
            <p className="conversation-sub-3">Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus 
                ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. 
                Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum.
                 Molestie nam morbi id arcu volutpat arcu.
            </p>
            <br/>
            <hr/>
            <ul className='status-container'>
                <li className='list-mark'><IoCheckmark className='check-mark' /> SMS</li>
                <li className='list-unmark'> <button className='empty-btn'></button> WhatsApp</li>
                <li className='list-mark'><IoCheckmark className='check-mark' /> Email</li>
            </ul>
           <div>
           <input className='input' placeholder='Type a message...'/>
            <button className='attach'><RiAttachment2 /></button>
            <button className='send'><LuSendHorizonal />Send</button>
           </div>
           </div>

       
    </div>
)
export default ChatFlow