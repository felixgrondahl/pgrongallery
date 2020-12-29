import React, { useState } from "react";
import {
	Wrapper,
	DropdownHeader,
	DropdownListWrapper,
	DropdownList,
	ListItem,
} from "./style";
import PropTypes from "prop-types";

export const DropdownPanel = ({ children, onChange }) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(children[0]);

	return (
		<Wrapper>
			<DropdownHeader onClick={() => setOpen((val) => !val)}>
				<h3>☰{selected.toUpperCase()}</h3>
			</DropdownHeader>
			<DropdownListWrapper>
				<DropdownList open={open}>
					{children.map((element, index) => {
						return (
							<ListItem
								key={`panelButton${index}`}
								onClick={() => {
									setSelected(element);
									setOpen(false);
									return onChange({ index: index, value: element });
								}}
							>
								<h3>☰{element.toUpperCase()}</h3>
							</ListItem>
						);
					})}
				</DropdownList>
			</DropdownListWrapper>
		</Wrapper>
	);
};

DropdownPanel.propTypes = {
	children: PropTypes.array,
	onChange: PropTypes.func,
};

export default DropdownPanel;
