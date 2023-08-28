import { useContext } from "react";
import { Box, Typography, Button, Drawer, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShopIcon from "@mui/icons-material/Computer";
import CartIcon from "@mui/icons-material/ShoppingCart";

import { Context } from "./AppBar";
import { Link } from "react-router-dom";

export function DrawerComponent() {
    const [isDrawerOpen, setDrawerOpen] = useContext<any>(Context);

    return (
        <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => {
                setDrawerOpen(false);
            }}
        >
            <Box p={2} width={200} textAlign={"center"} role="presentation">
                <Stack
                    direction={"column"}
                    display={"flex"}
                    spacing={3}
                    sx={{ fontFamily: "Roboto, sans-serif;" }}
                >
                    <Link
                        to="/"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        <Button
                            color="inherit"
                            variant="text"
                            sx={{ color: "rgb(66, 135, 245)" }}
                        >
                            <Stack direction={"row"} spacing={2}>
                                <HomeIcon />
                                <Typography variant="button">HOME</Typography>
                            </Stack>
                        </Button>
                    </Link>
                    <Link
                        to="/products"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        <Button
                            color="inherit"
                            variant="text"
                            sx={{ color: "rgb(66, 135, 245)" }}
                        >
                            <Stack direction={"row"} spacing={2}>
                                <ShopIcon />
                                <Typography variant="button">
                                    PRODUCTS
                                </Typography>
                            </Stack>
                        </Button>
                    </Link>
                    <Link to="/cart">
                        <Button
                            color="inherit"
                            variant="text"
                            sx={{ color: "rgb(66, 135, 245)" }}
                        >
                            <Stack direction={"row"} spacing={2}>
                                <CartIcon />
                                <Typography variant="button">CART</Typography>
                            </Stack>
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Drawer>
    );
}
