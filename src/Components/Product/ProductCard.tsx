import Typography from "@mui/material/Typography";
import "../../css/ProductPage.css";
import { Link } from "react-router-dom";

export function ProductCardComp(props: any) {
	return (
		<>
			<Link
				key={props.key}
				to={`/product/${props.path}`}
				style={{ textDecoration: "none", color: "black" }}
			>
				<div className="product-card">
					<img src={props.prop.imgsrc} />
					<p className="product-title">{props.prop.about}</p>
					<Typography variant="h6" className="product-price">
						{props.prop.price}
					</Typography>
				</div>
			</Link>
		</>
	);
}
