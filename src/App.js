import React from "react";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
// import LoginPage from "./components/login/LoginPage";
import Chatroom from "./components/chatroom/Chatroom";

const App = () => (
	<div>
		<Header />
		{/* <LoginPage /> */}
		<Chatroom />
		<Footer />
	</div>
);

export default App;
