import React from "react";

const Header = () => {
	return (
		<div className="header">
			<div className="header__nav">
				<a className="home-nav" href="/">
					Home
				</a>
				<div>
					<a href="/">Rooms</a>
					<a href="/">Login</a>
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
