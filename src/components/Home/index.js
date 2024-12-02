import {Component} from 'react'
import Navbar from "../Navbar"
import Sidebar from '../Sidebar'
import Users from '../Users'
import ChatterBox from '../ChatterBox'
import UserSmith from '../UserSmith'
import ChatFlow from '../ChatFlow'

import './index.css'

class Agent extends Component{
render(){
    return(
        <div className='agent-container'>
            <div className='agent-sidebar-container'> <Sidebar/>
            </div>
            <div className='agent-header-container'>
                <div><Navbar />
                <Users/></div>
            <div className='agent-chat-container'>
                <UserSmith />
                <ChatFlow/>
                <ChatterBox/>
            </div>
            </div>
        </div>
    )
}
}

export default Agent