import { Home } from "./Components/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Product } from "./Components/Product/ProductPage";
import { ProductInfo } from "./Components/Product/ProductInfoPage";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Carts } from "./Components/CartPage/Cartpage";
import LoginPage from "./Components/LoginPage/LoginPage";

export const context = createContext<any>("");

export default function App() {
	const [productData, setProductData] = useState<any>([]);

	useEffect(() => {
		axios.get("http://localhost:8080/products/getAll").then((response) => {
			setProductData(response.data);
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
					<Route path="/login" Component={LoginPage} />
				</Routes>
			</Router>
		</context.Provider>
	);
}
