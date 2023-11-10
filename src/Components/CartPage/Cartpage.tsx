import { AppBarComponent } from "../NavBar/AppBar";
import "../../css/CartPage.css";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export function Carts() {
	const [cartData, setCartData] = useState<any>([]);

	useEffect(() => {
		axios.get("http://localhost:7000/accounts/bhandari.anjan@gmail.com").then((response) => {
			setCartData(response.data.cart);
		});
	}, []);

	const [selectedData, setSelectedData] = useState<any>([]);

	const handleCheckboxChange = (event: any, data: any, index: number) => {
		const isChecked = event.target.checked;

		if (isChecked) {
			setSelectedData((prevData: any) => [...prevData, index]);
		} else {
			setSelectedData((prevData: any) => prevData.filter((item: any) => item !== index));
		}
	};

	const deleteFromCart = () => {
		axios
			.post(
				"http://localhost:8080/accounts/bhandari.anjan@gmail.com/deletefromcart",
				selectedData
			)
			.then((response: any) => {
				window.location.reload();
			});
	};

	return (
		<>
			<AppBarComponent />
			<div className="cart-parent-container">
				<div className="cart-container">
					<div className="cart-items-container">
						{cartData.map((item: any, index: number) => (
							<div className="cart-item-info-container">
								<input
									type="checkbox"
									name=""
									id=""
									onChange={(e) => {
										handleCheckboxChange(e, item, index);
									}}
								/>
								<img src={item.imgsrc} className="cart-items-image" />
								<div className="cart-items-about-container">
									<p className="cart-items-about">{item.about}</p>
								</div>
								<h4 className="cart-item-price">{item.price}</h4>
							</div>
						))}
					</div>

					<Box className="transaction-container">
						<p className="total-price">Total 42,00,000</p>
						<Button
							className="buy-now-button"
							sx={{ marginRight: "20px", marginBottom: "20px" }}
							variant="contained"
						>
							Buy All
						</Button>
						<Button
							variant="contained"
							sx={{
								marginRight: "20px",
								marginBottom: "20px",
								backgroundColor: "red",
							}}
							onClick={deleteFromCart}
						>
							Delete
						</Button>
					</Box>
				</div>
			</div>
		</>
	);
}
