import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<div className="header__nav">
				<NavLink className="home-nav" to="/home" activeClassName="header__active-link">
					Home
				</NavLink>
				<div>
					<NavLink to="/rooms" activeClassName="header__active-link">Rooms</NavLink>
					<NavLink to="/login" activeClassName="header__active-link">Login</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Header;

// צרו שתי קומפוננטות
// לוגין פייג' שתהיה בגודל של כל העמוד מלבד ההדר
// מתחתיה צרו קומפוננטה של פוטר
// שבתוכה שני לינקים
// about us 
// contact us
