export default function RegisterPage() {
	return (
		<>
			<div className="main-container">
				<div className="register-container">
					<h3 className="register-title">REGISTER</h3>
					<input type="email" className="register-email-field" />
					<input type="password" className="register-password-field" />
					<input type="password" className="register-confirm-field" />
					<button className="register-button"></button>
					<p>
						Already have an Account?{" "}
						<span className="login-redirect">Goto the Login Page</span>
					</p>
				</div>
			</div>
		</>
	);
}
