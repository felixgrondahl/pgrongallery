import React from "react";
import { Wrapper, MailLink } from "./style";
import { ReactComponent as Email } from "../../assets/icons/email.svg";

const Footer = () => {
	return (
		<Wrapper>
			<MailLink href="mailto:pgronart@gmail.com">
				<Email />
			</MailLink>
			<p>&#169;Peter Grondahl</p>
		</Wrapper>
	);
};

export default Footer;
