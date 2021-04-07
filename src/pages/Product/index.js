import React, { useEffect, useState, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import PortalModal from "../../components/Modal/PortalModal/";
import * as S from "./style";
import CloseButton from "../../components/CloseButton";
import { getCachedItem } from "../../utils/request";
import LightboxGallery from "../../components/Lightbox";
import { url } from "../../utils/products";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Title } from "../../styles/generic/Title";
import { Helmet } from "react-helmet";

const Product = (props) => {
	// eslint-disable-next-line react/prop-types
	let params = new URLSearchParams(props.location.search);
	// eslint-disable-next-line react/prop-types
	const cached = props.cached;
	const searchParam = params.get("product");
	const productId = params.get("productId");
	const location = useLocation();
	const history = useHistory();

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

	if (!productData) {
		return <div>Loading...</div>;
	}

	return (
		showModal && (
			<>
				<Helmet>
					<title>Peter Grondahl | {productData.title}</title>
					<meta name="description" content={`Browse beautiful art by Peter Gröndahl | ${productData.title} | ${productData.description}`}  />
					<link rel="canonical" href={`https://pgron.com/Gallery?product=true&productId=${productData.id}`} />
					<meta property="og:type" content="website" />
					<meta property="og:url" content={`https://pgron.com/Gallery?product=true&productId=${productData.id}`} />
					<meta property="og:title" content={`Peter Grondahl | Gallery | ${productData.title}`} />
					<meta property="og:description" content={`Peter Grondahl Gallery | ${productData.title}`} />
				</Helmet>
				<PortalModal ref={modalRef} onClick={() => !showImage.show && history.push(location.pathname)}>
					<S.Wrapper onClick={(event) => event.stopPropagation()}>
						<S.GalleryWrapper>
							{productData.images.map((image, index) => {
								return (
									<S.GalleryImageWrapper key={image.url}>
										<S.GalleryImage
											src={image.url}
											onClick={() => setShowImage({ show: true, imageIndex: index })}
											alt={`${productData.title} artwork ${index}`}
										/>
									</S.GalleryImageWrapper>
								);
							})}
						</S.GalleryWrapper>
						<S.TextWrapper>
							<Title>{productData.title}</Title>
							<S.Description>
								<p>{productData.description}</p>
							</S.Description>
							<S.Dimensions>
								<p>
									{productData.productHeight ? `${productData.productHeight}cm x ` : ""}
									{productData.productWidth ? `${productData.productWidth}cm x ` : ""}
									{productData.productDepth ? `${productData.productDepth}cm` : ""}
									<span>
										{productData.productHeight ? "height x " : ""}
										{productData.productWidth ? "width x " : ""}
										{productData.productDepth ? "depth" : ""}
									</span>
								</p>
							</S.Dimensions>
						</S.TextWrapper>
					</S.Wrapper>
					<CloseButton dark={false} onClick={() => !showImage.show && history.push(location.pathname)} />
					{showImage.show && (
						<LightboxGallery
							images={productData.images}
							startIndex={showImage.imageIndex}
							isOpen={showImage.show}
							closeCallback={() => setShowImage({ show: false, imageIndex: 0 })}
						/>
					)}
				</PortalModal>
			</>
		)
	);
};

export default Product;
