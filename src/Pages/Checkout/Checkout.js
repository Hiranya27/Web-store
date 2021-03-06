import React from "react";
import "./Checkout.css";
import CheckOut from "../../images/Checkout.jpg";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
const Checkout = () => {
	const [{basket, user}, dispatch] = useStateValue();
	return (
		<div className='checkout'>
			<div className='checkout_left'>
				<img className='checkout_ad' src={CheckOut} alt='' />
				<div>
					<h3>Hello, {user?.email}</h3>
					<h2 className='chechout_title'>Your shopping Basket</h2>
					{basket.map(item => (
						<CheckoutProduct
							id={item.id}
							title= {item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}

				</div>
			</div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
		</div>
	);
};

export default Checkout;
