import React from "react";

const LoginForm = () => {
	return (
		<div className="login-form">
			<h3>Login</h3>
			<form>
				<input placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default LoginForm;
