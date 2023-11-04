import { AppBarComponent } from "../NavBar/AppBar";
import { useNavigate } from "react-router-dom";
import "../../css/LoginPage.css";

export default function LoginPage() {
	const navigate = useNavigate();

	return (
		<>
			<AppBarComponent />
			<div className="main-container">
				<div className="login-container">
					<h3 className="login-title">LOGIN</h3>
					<input
						type="email"
						className="login-email-field"
						placeholder="Enter Email-Address"
					/>
					<input
						type="password"
						className="login-password-field"
						placeholder="Enter Password"
					/>
					<p className="forgot-password">Forgot Password</p>
					<button className="submit-button">LOGIN</button>
					<p className="create-account">
						Don't have an Account ?{" "}
						<span className="create-account-link" onClick={() => navigate("/")}>
							Create One
						</span>
					</p>
				</div>
			</div>
		</>
	);
}
