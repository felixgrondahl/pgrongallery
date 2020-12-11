import React, { useState } from "react";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, QuantityNumber, QuantityButton } from "./style";

export const QuantityInput = () => {
	const [quantity, setQuantity] = useState(1);

	return (
		<Wrapper>
			<QuantityButton
				className="quantitybutton minus"
				icon={faMinusSquare}
                size="2x"
                onClick={() => setQuantity(quantity > 1 ? (quantity - 1) : quantity)}
			/>
			<QuantityNumber>{quantity}</QuantityNumber>

			<QuantityButton
				className="quantitybutton plus"
				icon={faPlusSquare}
                size="2x"
                onClick={() => setQuantity(quantity + 1)}
			/>
		</Wrapper>
	);
};
