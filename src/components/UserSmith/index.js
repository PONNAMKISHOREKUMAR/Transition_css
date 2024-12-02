import './index.css'
import { RiMapPinLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiUserAddOutline } from "react-icons/ti";

const UserSmith = () => (
    <div className='main-container'>

        <div className='details-container-1'>
            <button className="cd-logo">CB</button>
            <div className='smith-container'>
                <h1 className='hannibal-smith'>Hannibal Smith</h1>
                <div className='smith-description-container'>
                    <RiMapPinLine  className='location-icon'/>
                    <p className='smith-description'>1 Market Street San Francisco, CA 94105</p>
                </div>
            </div>
        </div>
        
       <div className='customer-details-1'>
            <div className='customer-details-sub'>
                <p className='customer-id'>Customer ID </p>
                <ul className='customer-details-sub'>
                    <li>12345</li>
                    <BsThreeDotsVertical />
                </ul>
            </div>
            <hr/>
            <div className='customer-details-sub'>
                <p className='customer-id'>Email Address </p>
                <ul className='customer-details-sub'>
                    <li>rachel@sample.com</li>
                    <BsThreeDotsVertical />
                </ul>
            </div>
            <hr/>
            <div className='customer-details-sub'>
                <p className='customer-id'>Phone Number</p>
                <ul className='customer-details-sub'>
                    <li>8051298905</li>
                    <BsThreeDotsVertical />
                </ul>
            </div>
            <hr/>
            <div className='add-container'>
                <IoIosAddCircleOutline/>
                <p>Add</p>
            </div> 
        </div>
        <div className='customer-details-2'>
        <div className='customer-details-sub'>
                <p className='customer-id'>Loyalty Tier</p>
                <ul className='customer-details-sub'>
                    <li>Silver</li>
                    <BsThreeDotsVertical />
                </ul>
            </div>
            <hr/>
            <div className='customer-details-sub'>
                <p className='customer-id'>Segment</p>
                <ul className='customer-details-sub'>
                    <li>Sleepy Customer</li>
                    <BsThreeDotsVertical />
                </ul>
            </div>
            <hr/>
            <div className='add-container'>
                <IoIosAddCircleOutline/>
                <p>Add</p>
            </div> 
        </div>
        <div className='customer-details-3'>
        <div className='customer-details-sub'>
                <p className='customer-id'>Lifetime Value</p>
                <ul className='customer-details-sub'>
                    <li>$ 1M</li>
                    <BsThreeDotsVertical />
                </ul>
            </div>
            <hr/>
            <div className='customer-details-sub'>
                <p className='customer-id'>Propensity to Purchase</p>
                <ul className='customer-details-sub'>
                    <li className='list-items'> <img src='https://res.cloudinary.com/da3mrj5uf/image/upload/v1733062548/Ellipse_3851_botwty.png' alt="75%"/> 75%</li>
                    <BsThreeDotsVertical />
                </ul>
            </div>
            <hr/>
            <div className='add-container'>
                <IoIosAddCircleOutline/>
                <p>Add</p>
            </div> 
        </div>
        <div className='customer-details-4'>
        <div className='customer-details-sub'>
        <p className='customer-id'>Engagement Score</p>
                <ul className='customer-details-sub'>
                    <li className='list-items'> <img src='https://res.cloudinary.com/da3mrj5uf/image/upload/v1733063386/Group_1171287003_wk7thh.png' alt='80%' /> 80%</li>
                    <BsThreeDotsVertical />
                </ul>
                
            </div>
            <hr/>
            <div className='add-container'>
                <IoIosAddCircleOutline/>
                <p>Add</p>
            </div> 
        </div>

        <div className='buttons-container'>
        <button className='agent-button'>
            <TiUserAddOutline />
            Assign other Agent 
        </button>
        <button className='add-button'>
            Add New Widget
        </button>
        </div>       
   </div>
)

export default UserSmith