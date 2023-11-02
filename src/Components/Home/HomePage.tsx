import { Button } from "@mui/material";
import { AppBarComponent } from "../NavBar/AppBar";
import "../../css/HomePage.css";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<>
			<AppBarComponent />
			<div className="homepage">
				<h1 className="header">Welcome to my Shopping Website</h1>
				<Link to="/products" style={{ marginTop: "60px" }}>
					<Button variant="contained" sx={{ fontSize: "25px" }}>
						PRODUCTS
					</Button>
				</Link>
			</div>
		</>
	);
}