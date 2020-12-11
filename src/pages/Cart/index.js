import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { MainModal } from "../../styles/generic/Containers";
import PortalModal from "../../components/Modal/PortalModal/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { loadStripe } from "@stripe/stripe-js";
import { RemoveItemFromCart } from "../../utils/products";
import * as S from "./style";
import CloseButton from "../../components/CloseButton";

const stripePromise = loadStripe(
	"pk_test_51HkooREWp5rDDrzPdFDtoQWNCOsWHOyDnaTbS46i3a5Ubgd2WqeKWu2JsAaXKyNeuOYoJvV371gi7ss2V8fnhQDf00hnViajEt"
);

const Cart = (props) => {
	let params = new URLSearchParams(props.location.search);
	const location = useLocation();
	const history = useHistory();
	const [products, setProducts] = useState(); //initialize this with localstorage cart
	// const [updateCart, setUpdateCart] = useState(true);

	useEffect(() => {
		params.get("cart") && updateCart();
		// setUpdateCart(false);
	}, [params.get("cart")]);

	const updateCart = () => {
		setProducts(JSON.parse(localStorage.getItem("cart")));
	};

	const handleCheckout = async (event) => {
		const stripe = await stripePromise;
		const { error } = await stripe.redirectToCheckout({
			lineItems: [
				{
					price: "price_1HvhQ0EWp5rDDrzPOhJZp3v1",
					quantity: 1,
				},
				{
					price: "price_1HqyATEWp5rDDrzP92rEopA0",
					quantity: 1,
				},
			],
			mode: "payment",
			successUrl: "https://localhost:3000/success",
			cancelUrl: "https://localhost:3000/cancel",
		});
	};

	const ProductSection = ({ product }) => {
		// console.log(product);
		return (
			<S.Product>
				<S.ProductImg src={product.images[0].thumbnail} />
				<div className="info">
					<h3 style={{ margin: "0 0 5px 0" }}>{product.title.toUpperCase()}</h3>
					<p>{product.description}</p>
					<S.ProductButton
						onClick={() => {
							RemoveItemFromCart(product.id);
							updateCart();
						}}
					>
						<FontAwesomeIcon icon={faTrash} style={{ marginRight: "0.7em" }} />
						REMOVE ITEM
					</S.ProductButton>
				</div>
				<div className="right">
					{/* <QuantityInput /> */}
					<S.Price>{product.price}€</S.Price>
				</div>
			</S.Product>
		);
	};

	const GetTotal = () => {
		let total = 0;
		products &&
			products.forEach((element) => {
				total += element.price;
			});

		return total;
	};

	return (
		params.get("cart") && (
			<PortalModal onClick={() => history.push(location.pathname)}>
				<MainModal
					style={{ padding: "30px" }}
					onClick={(event) => event.stopPropagation()}
				>
					{/* <h1 style={{ textAlign: "center", margin: "0" }}>SHOPPING CART</h1> */}
					<S.CartWindow>
						<S.Column className="productList">
							<h2 style={{ textAlign: "center", fontSize: "2em" }}>
								SHOPPING CART
							</h2>
							<S.List>
								{products &&
									products.map((p, index) => {
										return (
											<li key={`cartlist${index}`}>
												<ProductSection key={`cartproductlist${index}`} product={p} />
												<hr />
											</li>											
										);
									})}
							</S.List>
						</S.Column>

						<S.Column className="total">
							<h2 style={{ textAlign: "center", fontSize: "1.5em" }}>Total</h2>
							{/* <S.Grid> */}
							<S.List>
								{products &&
									products.map((p, index) => {
										return (
											<li key={`totalprice${index}`}>
												<S.Grid>
													<p>{p.title.toUpperCase()}</p>
													<p>
														<span style={{ float: "right" }}>{p.price}€</span>
													</p>
												</S.Grid>
											</li>
										);
									})}
							</S.List>
							<hr />
							{/* <S.Grid className="totalPrice"> */}
							<p>
								<b>
									Total:
									<span style={{ float: "right" }}>{GetTotal()}€</span>
								</b>
							</p>
							{/* </S.Grid> */}
							<S.CheckoutButton height={"45px"} onClick={handleCheckout}>
								GO TO CHECKOUT &rarr;
							</S.CheckoutButton>
						</S.Column>
					</S.CartWindow>
					<CloseButton dark={true} onClick={() => history.push(location.pathname)} />
				</MainModal>
			</PortalModal>
		)
	);
};

export default Cart;
