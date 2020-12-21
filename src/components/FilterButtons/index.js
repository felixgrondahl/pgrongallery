import React from "react";
import { TextButton } from "../../styles/generic/Button";
import PropTypes from "prop-types";

//Go through all filters create JSX for each button
export const FilterButtons = ({ filters, currentFilter, OnFilter }) => {

	return (
		<div style={{ marginBottom: "15px" }}>
			{filters.map((filter) => {
				return (
					<TextButton
						dark={true}
						key={filter}
						active={filter === currentFilter}
						onClick={() => OnFilter(filter)}
					>
						{filter.toUpperCase()}
					</TextButton>
				);
			})}
		</div>
	);
};

FilterButtons.propTypes = {
	filters: PropTypes.array.isRequired,
	currentFilter: PropTypes.string.isRequired,
	OnFilter: PropTypes.func.isRequired,
};
