import { useNavigate } from "react-router-dom";
import "../../css/ProfilePage.css";
import { AppBarComponent } from "../NavBar/AppBar";
import {context} from "../../App";

export default function ProfilePage() {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.setItem("loggedIn", "Login");
		navigate("/");
		window.location.reload();
	};

	return (
		<>
			<AppBarComponent />
			<div className="main-container">
				<button onClick={logout}>LOGOUT</button>
			</div>
		</>
	);
}
