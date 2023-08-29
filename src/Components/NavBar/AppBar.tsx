import { createContext, useState, useRef, useEffect } from "react";
import { AppBar, Stack, useMediaQuery } from "@mui/material";

import { DrawerComponent } from "./Drawer";
import { DrawerIcon, LoginButton, NavButtons } from "./Buttons";

export const Context = createContext<any>("");

export function AppBarComponent() {
	const appbarRef = useRef<any>(null);

	const [isDrawerOpen, setDrawerOpen] = useState<boolean>();
	const [appBarHeight, setAppBarHeight] = useState<any>();
	const isSmallScreen = useMediaQuery("(max-width: 800px)");

	useEffect(() => {
		if (appbarRef.current) {
			setAppBarHeight(appbarRef.current.clientHeight);
			console.log(appbarRef.current.clientHeight);
		}
	}, []);

	return (
		<>
			<Context.Provider value={[isDrawerOpen, setDrawerOpen, appBarHeight, setAppBarHeight]}>
				<AppBar position="fixed" ref={appbarRef} sx={{ zIndex: 2 }}>
					<Stack direction={"row"} paddingLeft={"20px"} paddingRight={"20px"} spacing={2} display={"flex"}>
						{isSmallScreen ? <DrawerIcon /> : <NavButtons />}
						<LoginButton />
					</Stack>
				</AppBar>
				<DrawerComponent />
			</Context.Provider>
		</>
	);
}
