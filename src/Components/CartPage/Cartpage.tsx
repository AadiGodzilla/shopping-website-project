import { AppBarComponent } from "../NavBar/AppBar";
import "../../css/CartPage.css";
import { Box, Button } from "@mui/material";
import { CartItemComponent } from "./CartItem";

export function Carts() {
	return (
		<>
			<AppBarComponent />
			<div className="cart-parent-container">
				<div className="cart-container">
					<div className="cart-items-container">
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
						<CartItemComponent />
					</div>
					<Box
						width={"100%"}
						height={"12%"}
						display={"flex"}
						justifyContent={"right"}
						alignItems={"center"}
						overflow={"hidden"}
					>
						<p
							style={{
								overflow: "hidden",
								fontSize: "15px",
								color: "orange",
								fontWeight: "bold",
								paddingBottom: "20px",
								paddingRight: "20px",
							}}
						>
							Total 42,00,000
						</p>
						<Button
							variant="contained"
							sx={{ marginRight: "20px", marginBottom: "20px" }}
						>
							Buy All
						</Button>
					</Box>
				</div>
			</div>
		</>
	);
}
