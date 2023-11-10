import { AppBarComponent } from "../NavBar/AppBar";
import { useNavigate } from "react-router-dom";
import "../../css/LoginPage.css";
import { useState } from "react";
import axios from "axios";
import {context} from "../../App";

export default function LoginPage() {
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();

	const LoginToAccount = (e: any) => {
		axios.get(`http://localhost:7000/accounts/${email}`).then((res: any) => {
			if (res.data.password === password && password != "") {
				localStorage.setItem("loggedIn", "Profile");
				navigate("/");
				window.location.reload();
			}
		});
	};

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
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						className="login-password-field"
						placeholder="Enter Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<p className="forgot-password">Forgot Password</p>
					<button className="submit-button" onClick={LoginToAccount}>
						LOGIN
					</button>
					<p className="create-account">
						Don't have an Account ?{" "}
						<span className="create-account-link" onClick={() => navigate("/register")}>
							Create One
						</span>
					</p>
				</div>
			</div>
		</>
	);
}
