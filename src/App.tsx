import { Home } from "./Components/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Product } from "./Components/Product/ProductPage";
import { ProductInfo } from "./Components/Product/ProductInfoPage";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Carts } from "./Components/CartPage/Cartpage";

export const context = createContext<any>("");

export default function App() {
	const [productData, setProductData] = useState<any>([]);

	useEffect(() => {
		axios.get("http://localhost:5000/productdata").then((response) => {
			setProductData(response.data);
			console.log(productData);
		});
	}, []);

	return (
		<context.Provider value={{ productData, setProductData }}>
			<Router>
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/products" Component={Product} />
					{productData.map((item: any, index: number) => (
						<Route
							key={index}
							path={`/product/${item.about
								.replace(/, /g, "")
								.replace(/ /g, "-")
								.toLowerCase()}`}
							Component={() => <ProductInfo content={item} />}
						/>
					))}
					<Route path="/cart" Component={Carts} />
				</Routes>
			</Router>
		</context.Provider>
	);
}
