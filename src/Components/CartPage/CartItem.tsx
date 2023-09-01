import "../../css/CartPage.css";

export function CartItemComponent() {
	return (
		<div className="cart-item-info-container">
			<img src="/src/assets/images/laptop.png" className="cart-items-image" />
			<div className="cart-items-about-container">
				<p className="cart-items-about">
					BIGBYTE Workstation Laptop 64GB RAM, 2TB SSD NVME, RTX 3060 6GB, Intel 10th gen
					i7-10870H, 8 core 16 Threads,16MB Cache, 15.6 FHD 144hz Display
				</p>
			</div>
			<h4 className="cart-item-price">रु 3,00,000</h4>
		</div>
	);
}
