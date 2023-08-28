import { useContext } from "react";
import { AppBarComponent, Context } from "../NavBar/AppBar";
import "../../css/CartPage.css";

export function Carts() {
  const [appBarHeight] = useContext(Context);

  console.log(appBarHeight);

  return (
    <>
      <AppBarComponent />
      <div className="cart-container">Hello World!!</div>
    </>
  );
}
