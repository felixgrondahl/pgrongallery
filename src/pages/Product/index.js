import React, { useEffect, useState, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import PortalModal from "../../components/Modal/PortalModal/";
import * as S from "./style";
import CloseButton from "../../components/CloseButton";
import { getCachedItem } from "../../utils/request";
import LightboxGallery from "../../components/Lightbox";
import { url, AddProductToCart } from "../../utils/products";
import PropTypes from "prop-types";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Product = (props) => {
	// eslint-disable-next-line react/prop-types
	let params = new URLSearchParams(props.location.search);
	// eslint-disable-next-line react/prop-types
	const cached = props.cached;
	const searchParam = params.get("product");
	const productId = params.get("productId");
	const location = useLocation();
	const history = useHistory();
	// console.log('called');
	const [productData, setProductData] = useState();
	const [showModal, setShowModal] = useState(false);
	const [showImage, setShowImage] = useState({ show: false, imageIndex: 0 });
	const modalRef = useRef();

	useEffect(() => {
		if (searchParam && cached) {
			setProductData(getCachedItem(url, productId));
			setShowModal(true);
			disableBodyScroll(modalRef);
		} else {
			enableBodyScroll(modalRef);
			setShowModal(false);
		}
	}, [searchParam, cached, productId]);

	const CheckSold = ({ product }) => {
		if (product.sold) {
			return <h3 style={{ color: "rgba(30, 0, 0)" }}>SOLD</h3>;
		}

		return (
			<S.AddToCart onClick={() => AddProductToCart(productData)}>
				ADD TO CART
			</S.AddToCart>
		);
	};

	CheckSold.propTypes = {
		product: PropTypes.object,
	};

	// if (!productData) {
	// 	return <div>Loading...</div>;
	// }

	return (
		showModal && (
			<PortalModal
				ref={modalRef}
				onClick={() => !showImage.show && history.push(location.pathname)}
			>
				<S.ProductWindow onClick={(event) => event.stopPropagation()}>
					<React.Fragment>
						<S.ImageGrid numImages={productData.images.length}>
							{productData.images.map((image, index) => {
								return (
									<S.ProductImage
										key={image.url}
										src={image.url}
										className={index === 0 ? "main" : "sub"}
										onClick={() =>
											setShowImage({ show: true, imageIndex: index })
										}
									/>
								);
							})}
						</S.ImageGrid>
						<S.InfoWrapper>
							<div>
								<S.ProductTitle>
									{productData.title.toUpperCase()}
								</S.ProductTitle>
								<p>{productData.description}</p>
							</div>

							<div className="description">
								{/* <p style={{ marginTop: "10px" }}> */}
								{/* <span style={{ margin: "0 10px" }}> */}
								<p>
									{productData.productWidth &&
										`WIDTH ${productData.productWidth}cm`}
								</p>
								<p>
									{/* </span> */}
									{/* <span style={{ margin: "0 10px" }}> */}
									{productData.productHeight &&
										`HEIGHT ${productData.productHeight}cm`}
								</p>
								{/* </span> */}
								{/* <span style={{ margin: "0 10px" }}> */}
								<p>
									{productData.productDepth &&
										`DEPTH ${productData.productDepth}cm`}
								</p>
								{/* </span> */}
								{/* </p> */}
							</div>
							<div className="info">
								<p>{productData.price}€</p>
								<CheckSold product={productData} />
							</div>
						</S.InfoWrapper>
					</React.Fragment>
					<CloseButton
						dark={true}
						onClick={() => !showImage.show && history.push(location.pathname)}
					/>
				</S.ProductWindow>
				{showImage.show && (
					<LightboxGallery
						images={productData.images}
						startIndex={showImage.imageIndex}
						isOpen={showImage.show}
						closeCallback={() => setShowImage({ show: false, imageIndex: 0 })}
					/>
				)}
			</PortalModal>
		)
	);
};

export default Product;
