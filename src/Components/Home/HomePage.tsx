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
				<Link to="/products">
					<Button
						variant="contained"
						className="product-button"
						sx={{
							fontSize: "30px",
							marginTop: "60px",
							borderWidth: 5,
							borderRadius: 5,
							":hover": {
								borderWidth: 5,
								borderRadius: 5,
							},
						}}
					>
						PRODUCTS
					</Button>
				</Link>
			</div>
		</>
	);
}
