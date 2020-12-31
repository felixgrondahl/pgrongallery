import React, { useState, useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { MainModal, CenteredForm } from "../../styles/generic/Containers";
import { TextInput } from "../../styles/generic/TextInput";
import PortalModal from "../../components/Modal/PortalModal";
import { InputWrapper, SendButton, ReqSentWrapper } from "./style";
import CloseButton from "../../components/CloseButton";
import emailjs from "emailjs-com";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
emailjs.init("user_mTBReTOfvtd1wurL6sAFJ");

const SubmitRequest = (e, state, callback) => {
	e.preventDefault();

	if (!regName.test(state.name)) {
		alert("Please enter you full name (first & last).");
		return;
	}

	const productData = JSON.parse(localStorage.getItem("cart"));
	if (productData.length < 1) {
		alert("You have no products in your cart.");
		return;
	}

	let productString = "";
	productData.forEach((element, index) => {
		productString += `[Product ${index + 1}: ${element.title} - ID: ${
			element.id
		}], `;
	});

	emailjs.send("service_x6ax2r9", "template_u4kmuj1", {
		name: state.name,
		email: state.email,
		phone: state?.phone,
		shippingAdress: state.address,
		postCode: state.postcode,
		country: state.country,
		products: productString,
	});

	return callback();
};

const RequestInvoice = (props) => {
	// eslint-disable-next-line react/prop-types
	let params = new URLSearchParams(props.location.search);
	const searchParam = params.get("requestinvoice");
	const location = useLocation();
	const history = useHistory();
	const [formState, setFormState] = useState({});
	const [sentReq, setSentReq] = useState(false);
	const modalRef = useRef();

	useEffect(() => {
		if (searchParam) {
			disableBodyScroll(modalRef);
		} else {
			enableBodyScroll(modalRef);
			setSentReq(false);
		}
	}, [searchParam]);

	return (
		searchParam && (
			<div>
				<PortalModal ref={modalRef} onClick={() => history.push(location.pathname)}>
					<MainModal onClick={(event) => event.stopPropagation()}>
						{sentReq ? (
							<ReqSentWrapper>
								<h1
									style={{
										marginTop: "0px",
										marginBottom: "20px",
										textAlign: "center",
									}}
								>
									THANK YOU
								</h1>
								<p>We will return to you within two business days.</p>
								<SendButton onClick={() => history.push(location.pathname)}>
									CLOSE
								</SendButton>
							</ReqSentWrapper>
						) : (
							<>
								<CenteredForm
									onSubmit={(e) =>
										SubmitRequest(e, formState, () => setSentReq(true))
									}
								>
									<h1
										style={{
											marginTop: "0px",
											marginBottom: "20px",
											textAlign: "center",
										}}
									>
										REQUEST INVOICE
									</h1>

									{/* <form> */}
									<div>
										<h3>Personal Info</h3>

										{/* <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}> */}
										<InputWrapper>
											<label style={{ textAlign: "left" }} htmlFor="name">
												Name
											</label>
											<p id="hint">First and last name</p>
											<TextInput
												id="name"
												type="text"
												required={true}
												onChange={(e) =>
													setFormState({ ...formState, name: e.target.value })
												}
											/>
										</InputWrapper>

										<InputWrapper>
											<label style={{ textAlign: "left" }} htmlFor="email">
												Email
											</label>
											<p id="hint">eg. example@domain.com</p>
											<TextInput
												id="email"
												type="email"
												required={true}
												onChange={(e) =>
													setFormState({ ...formState, email: e.target.value })
												}
											/>
										</InputWrapper>

										<InputWrapper>
											<label style={{ textAlign: "left" }} htmlFor="tel">
												Phone{" "}
												<span style={{ color: "rgba(0, 0, 0, 0.5)" }}>
													(optional)
												</span>
											</label>
											<p id="hint">eg. +44 7500 00000</p>
											<PhoneInput
												country={"us"}
												id="tel"
												onChange={(value, data) =>
													setFormState({
														...formState,
														phone: `+${data.dialCode} ${value
															.replace(/[^0-9]+/g, "")
															.slice(data.dialCode.length)}`,
													})
												}
											/>
										</InputWrapper>
									</div>

									{/* </div> */}
									<div>
										<h3>Shipping Info</h3>
										<InputWrapper>
											<label style={{ textAlign: "left" }} htmlFor="address">
												Shipping Address
											</label>
											<TextInput
												id="address"
												type="text"
												required={true}
												onChange={(e) =>
													setFormState({
														...formState,
														address: e.target.value,
													})
												}
											/>
										</InputWrapper>

										<InputWrapper>
											<label style={{ textAlign: "left" }} htmlFor="postcode">
												Post Code
											</label>
											<TextInput
												id="postcode"
												type="text"
												required={true}
												onChange={(e) =>
													setFormState({
														...formState,
														postcode: e.target.value,
													})
												}
											/>
										</InputWrapper>

										<InputWrapper>
											<label style={{ textAlign: "left" }} htmlFor="country">
												Country
											</label>
											<TextInput
												id="country"
												type="text"
												required={true}
												onChange={(e) =>
													setFormState({
														...formState,
														country: e.target.value,
													})
												}
											/>
										</InputWrapper>
									</div>
									<SendButton type="submit">SEND REQUEST</SendButton>
								</CenteredForm>
							</>
						)}
						<CloseButton
							dark={true}
							onClick={() => history.push(location.pathname)}
						/>
					</MainModal>
				</PortalModal>
			</div>
		)
	);
};

export default RequestInvoice;
