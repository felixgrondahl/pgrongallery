import React from "react";
import { Wrapper, MailLink } from "./style";

const Footer = () => {
	return (
		<Wrapper>
			{/* <div> */}
				<MailLink href="mailto:pgronab@gmail.com">pgronab@gmail.com</MailLink>
				<p>&#169;Peter Grondahl</p>
			{/* </div> */}
		</Wrapper>
	);
};

export default Footer;
