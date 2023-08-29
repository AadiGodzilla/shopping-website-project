import { useContext } from "react";
import { AppBarComponent, Context } from "../NavBar/AppBar";
import "../../css/CartPage.css";
import { Box } from "@mui/material";

export function Carts() {
	const [appBarHeight] = useContext(Context);

	console.log(appBarHeight);

	return (
		<>
			<AppBarComponent />
			<div className="main-container">
				<div className="cart-container">
					<Box height={"1000px"} width={"50vw"} bgcolor={"red"}></Box>
				</div>
			</div>
		</>
	);
}
