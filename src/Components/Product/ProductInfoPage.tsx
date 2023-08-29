import { Button } from "@mui/material";
import "../../css/ProductInfoPage.css";
import { AppBarComponent, Context } from "../NavBar/AppBar";
import { useContext } from "react";

export function ProductInfo(props: any) {
	const [, , appBarHeight] = useContext(Context);

	return (
		<>
			<AppBarComponent />
			<div className="product-info-main-container" style={{ marginTop: `${appBarHeight}px` }}>
				<div className="product-info-container">
					<h3 className="product-info-title">{props.content.about}</h3>
					<div className="content-container">
						<div className="product-content1">
							<img src={props.content.imgsrc} className="product-info-image" />
							<h2 className="product-info-price">{props.content.price}</h2>
							<div className="transaction-content">
								<Button variant={"contained"} className="buttons">
									Add to Cart
								</Button>
								<Button variant={"contained"} className="buttons">
									Buy Now
								</Button>
							</div>
						</div>
						<div className="product-content2">
							<h2 className="product-info-list-header">Product Details</h2>
							<ul className="product-info-list">
								{props.content.bullets.map((items: any, index: number) => (
									<li key={index}>{items}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
