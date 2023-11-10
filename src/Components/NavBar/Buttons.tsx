import { useContext, useEffect, useState } from "react";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/LoginRounded";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "./AppBar";
import { CartItemComponent } from "../CartPage/CartItem";

export function DrawerIcon() {
	const [isDrawerOpen, setDrawerOpen] = useContext<any>(Context);

	return (
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="logo"
			onClick={() => {
				setDrawerOpen(true);
				isDrawerOpen;
			}}
		>
			<MenuIcon />
		</IconButton>
	);
}

export function NavButtons() {
	return (
		<>
			<Link to="/" style={{ color: "white", textDecoration: "none" }}>
				<Button color="inherit" sx={{ padding: "10px", fontSize: "17px" }}>
					HOME
				</Button>
			</Link>
			<Link to="/products" style={{ color: "white", textDecoration: "none" }}>
				<Button color="inherit" sx={{ padding: "10px", fontSize: "17px" }}>
					PRODUCTS
				</Button>
			</Link>
			<Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
				<Button
					color="inherit"
					sx={{
						padding: "10px",
						fontSize: "17px",
					}}
				>
					CART
				</Button>
			</Link>
		</>
	);
}

export function LoginButton() {
	const navigate = useNavigate();

	const [loggedOrProfile, setLoggedorProfile] = useState<string>("Login");

	useEffect(() => {
		if (localStorage.getItem("loggedIn") === "Profile") {
			setLoggedorProfile("Profile");
		} else {
			setLoggedorProfile("Login");
		}
	}, []);

	return (
		<Stack
			direction={"row-reverse"}
			paddingLeft={"20px"}
			paddingRight={"20px"}
			spacing={2}
			display={"flex"}
			flexGrow={1}
		>
			<Button
				color="inherit"
				sx={{ padding: "2px", fontSize: "17px" }}
				onClick={() => {
					if (loggedOrProfile === "Profile") {
						navigate("/profile");
					} else {
						navigate("/login");
					}
				}}
			>
				<Stack direction={"row"} spacing={2}>
					<LoginIcon />
					<Typography variant="button" fontSize={"17px"}>
						{loggedOrProfile}
					</Typography>
				</Stack>
			</Button>
		</Stack>
	);
}
