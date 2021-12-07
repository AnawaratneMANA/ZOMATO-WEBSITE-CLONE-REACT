import React from 'react'
import "./header.scss"
const Header = () => {
    return (
        <div className="max-width header">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" className="header-logo"/>
            <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                        <i className="fi fi-rs-marker absolute-center location-icon"></i>
                            <div> Sri Lanka</div>
                        </div>
                        <i className="fi fi-rs-caret-down absolute-center"></i>
                    </div>
                    <div className="location-search-seperator"></div>
                    <div className="header-searchbar">
                        <i className="fi-rs-search absolute-center search-icon"></i>
                        <input placeholder="Search for restaurant, cuisine or dish" className="search-input"/>
                    </div>
                 </div>
                <div className="profile-wrapper">
                    <img src="https://i.pinimg.com/474x/20/0d/72/200d72a18492cf3d7adac8a914ef3520.jpg" alt="Profile" className="header-profile-image"/>
                    <span className="header-user-name">Nirmith</span>
                    <i className="fi fi-rs-angle-small-down absolute-center profile-options-icon"></i>
                </div>
             </div>
        </div>
        
    )
    
}

export default Header;
