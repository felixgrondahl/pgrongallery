import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 100vw;
`;

export const DropdownHeader = styled.div`
	text-align: left;
	background-color: #f8f8f8;
	border: 1px solid rgba(0, 0, 0, 0.15);

	height: 40px;
	margin: 10px 5px 0px 5px;
	padding: 5px 5px;

	box-sizing: border-box;

	font-size: 16px;
	line-height: 19px;
	display: flex;
	align-items: center;
	letter-spacing: 0.16em;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08);
	h3 {
		margin: 0;
	}
`;

export const DropdownListWrapper = styled.div``;

export const DropdownList = styled.ul`
	display: ${(props) => (props.open ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	text-align: left;
	padding: 0.5rem 1rem;
	margin: 0;
	background-color: #F2F2F2;
	text-transform: uppercase;

	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
	border-radius: 3px;

	transition: transform 0.3s ease-in-out;
`;

export const ListItem = styled.li`
	list-style: none;

	h3 {
		margin: 10px;
		display: block;
	}
`;
