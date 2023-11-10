import { useNavigate } from "react-router-dom";
import "../../css/RegisterPage.css";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [confirm, setConfirm] = useState<string>();

	const RegisterAccount = () => {
		var randomID = Math.floor(Math.random() * 1000000) + 1;

		if (confirm != password) {
			alert("Password Does not Match");
			return -1;
		}

		const postData = {
			accountID: randomID,
			email: email,
			password: password,
			cart: [],
		};

		axios.post("http://localhost:7000/accounts/add", postData).then(() => {
			navigate("/login");
		});
	};

	return (
		<>
			<div className="main-container">
				<div className="register-container">
					<h3 className="register-title">REGISTER</h3>
					<input
						type="email"
						className="register-email-field"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						className="register-password-field"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="password"
						className="register-confirm-field"
						onChange={(e) => setConfirm(e.target.value)}
					/>
					<button className="register-button" onClick={RegisterAccount}>
						REGISTER
					</button>
					<p>
						Already have an Account?{" "}
						<span className="login-redirect" onClick={() => navigate("/login")}>
							Goto the Login Page
						</span>
					</p>
				</div>
			</div>
		</>
	);
}
