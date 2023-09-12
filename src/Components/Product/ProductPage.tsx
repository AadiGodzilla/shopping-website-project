import { AppBarComponent } from "../NavBar/AppBar";
import { Box } from "@mui/material";
import { ProductCardComp } from "./ProductCard";
import { useContext } from "react";

import "../../css/ProductPage.css";
import { context } from "../../App";

export function Product() {
	const { productData } = useContext(context);

	return (
		<>
			<AppBarComponent />
			<Box className="product-container">
				{productData.map((item: any, index: number) => (
					<ProductCardComp
						prop={item}
						key={index}
						path={item.about.replace(/, /g, "").replace(/ /g, "-").toLowerCase()}
					/>
				))}
			</Box>
		</>
	);
}
