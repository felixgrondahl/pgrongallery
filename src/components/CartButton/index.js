import React from "react";
import * as S from "./style";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartButton = () => {

	return (
		<div>
			<S.CartButton
				icon={faShoppingCart}
				size="lg"
				alt="Your shopping cart"
			/>
		</div>
	);
};

export default CartButton;
