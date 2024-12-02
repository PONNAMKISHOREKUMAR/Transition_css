import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './index.css'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <img 
                src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733050761/riskhawk-logo_1_2x_rbg5it.png"
                alt="risk-hawk"
                className="risk-image" 
            />
            <div>
                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733051092/file-search-02_ow5yml.png"
                            alt="file-search"
                            className="mini-img"  
                        />
                        <h1 className="title">Internal Audit</h1>
                    </div>
                    <div className="icon-container">
                        <MdOutlineKeyboardArrowRight className="arrow-icon" />
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733051179/file-check-02_a3arii.png" 
                            alt="file-check"
                            className="mini-img"
                        />
                        <h1 className="title">UAT Testing</h1>
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733052493/link-03_k8xpzw.png"
                            alt="link"
                        />
                        <h1 className="title">Intract</h1>
                    </div>
                    <div className="icon-container">
                        <MdOutlineKeyboardArrowRight className="arrow-icon" />
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054002/users_fsjddt.png"
                            alt="link"
                        />
                        <h1 className="title">Queue</h1>
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054055/sitemap_tytciv.png"
                            alt="link"
                        />
                        <h1 className="title">WorkFlow</h1>
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054092/user_wgimj6.png"
                            alt="link"
                        />
                        <h1 className="title">Admin</h1>
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054131/box_vudraj.png"
                            alt="link"
                        />
                        <h1 className="title">Asset</h1>
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054174/users_1_k5inn8.png"
                            alt="link"
                        />
                        <h1 className="title">Parent</h1>
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054214/circle-off_bkirxh.png"
                            alt="link"
                        />
                        <h1 className="title">Option 1</h1>
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054250/circle-off_1_tkot2c.png"
                            alt="link"
                        />
                        <h1 className="title">Option 2</h1>
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054284/wrench_rl7xsm.png"
                            alt="link"
                        />
                        <h1 className="title">All Accessories</h1>
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733051092/file-search-02_ow5yml.png"
                            alt="link"
                        />
                        <h1 className="title">Internal Audit</h1>
                    </div>
                    <div className="icon-container">
                        <MdOutlineKeyboardArrowRight className="arrow-icon" />
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054443/star-06_ah6kmw.png"
                            alt="link"
                        />
                        <h1 className="title">Decorating</h1>
                    </div>
                    <div className="icon-container">
                        <MdOutlineKeyboardArrowRight className="arrow-icon" />
                    </div>
                </div>

                <div className="sidebar-mini-container">
                    <div className="sidebar-content">
                        <img 
                            src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733054449/gift_lzijmj.png"
                            alt="link"
                        />
                        <h1 className="title">Presenting</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar