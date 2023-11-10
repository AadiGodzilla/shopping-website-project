import { Home } from "./Components/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Product } from "./Components/Product/ProductPage";
import { ProductInfo } from "./Components/Product/ProductInfoPage";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Carts } from "./Components/CartPage/Cartpage";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";

export const context = createContext<any>("");

export default function App() {
	const [productData, setProductData] = useState<any>([]);
	const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

	useEffect(() => {
		axios.get("http://localhost:7000/products/getAll").then((response) => {
			setProductData(response.data);
		});

		if (localStorage.getItem("loggedIn") == "Profile") {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
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

					{isLoggedIn ? (
						<Route path="/profile" Component={ProfilePage} />
					) : (
						<Route path="/login" Component={LoginPage} />
					)}
					<Route path="/register" Component={RegisterPage} />
				</Routes>
			</Router>
		</context.Provider>
	);
}
