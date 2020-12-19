import React, { useEffect, useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { MainModal } from "../../styles/generic/Containers";
import PortalModal from "../../components/Modal/PortalModal/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { RemoveItemFromCart } from "../../utils/products";
import * as S from "./style";
import CloseButton from "../../components/CloseButton";
import PropTypes from "prop-types";

const Cart = (props) => {
	// eslint-disable-next-line react/prop-types
	let params = new URLSearchParams(props.location.search);
	const searchParam = params.get("cart");
	const location = useLocation();
	const history = useHistory();
	const [products, setProducts] = useState(); //initialize this with localstorage cart
	// const [updateCart, setUpdateCart] = useState(true);

	useEffect(() => {
		searchParam && updateCart();
		// setUpdateCart(false);
	}, [searchParam]);

	const updateCart = () => {
		setProducts(JSON.parse(localStorage.getItem("cart")));
	};

	const ProductSection = ({ product }) => {
		// console.log(product);
		return (
			<S.Product>
				<S.ProductImg src={product.images[0].thumbnail} />
				<div className="info">
					<h3 style={{ margin: "0 0 5px 0" }}>{product.title.toUpperCase()}</h3>
					<p>{product.description}</p>
				</div>
				<div className="right">
					{/* <QuantityInput /> */}
					<S.Price>{product.price}€</S.Price>
					<S.ProductButton
						onClick={() => {
							RemoveItemFromCart(product.id);
							updateCart();
						}}
					>
						<FontAwesomeIcon icon={faTrash} style={{ marginRight: "0.9em" }} />
						REMOVE
					</S.ProductButton>
				</div>
			</S.Product>
		);
	};

	ProductSection.propTypes = {
		product: PropTypes.object,
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
					style={{ padding: "5px", paddingTop: "30px" }}
					onClick={(event) => event.stopPropagation()}
				>
					<S.CartWindow>
						<S.Column className="productList">
							<S.Title className="title">SHOPPING CART</S.Title>
							<S.List>
								{products &&
									products.map((p, index) => {
										return (
											<li key={`cartlist${index}`}>
												<ProductSection
													key={`cartproductlist${index}`}
													product={p}
												/>
												{/* <hr /> */}
											</li>
										);
									})}
							</S.List>
						</S.Column>

						<S.Column className="total">
							<S.Title>Total</S.Title>
							{/* <S.Grid> */}
							<S.List style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}>
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
							{/* <hr /> */}
							<p>
								<b>
									Total:
									<span style={{ float: "right" }}>{GetTotal()}€</span>
								</b>
							</p>
							{/* </S.Grid> */}
							<Link
								to={{
									pathname: location.url,
									search: `?requestinvoice=true`,
								}}
							>
								<S.CheckoutButton height={"45px"}>
									REQUEST INVOICE &rarr;
								</S.CheckoutButton>
							</Link>
						</S.Column>
					</S.CartWindow>
					<CloseButton
						dark={true}
						onClick={() => history.push(location.pathname)}
					/>
				</MainModal>
			</PortalModal>
		)
	);
};

export default Cart;
