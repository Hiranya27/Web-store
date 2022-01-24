import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: props.id,
		});
	};

	return (
		<div className='checkoutProduct'>
			<img className='checkoutProduct_image' src={props.image} alt='' />

			<div className='checkoutProduct_info'>
				<p className='checkoutProduct_title'>{props.title}</p>
				<p className='checkoutProduct_price'>
					<small>$</small>
					<strong>{props.price}</strong>
				</p>
				<div className='checkoutProduct_rating'>
					{Array(props.rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
				{!props.hideButton && (
					<button onClick={removeFromBasket}>Remove from Basket</button>
				)}
			</div>
		</div>
	);
};

export default CheckoutProduct;
