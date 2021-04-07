import React from "react";
import { TextButton } from "../../../styles/generic/Button";
import PropTypes from "prop-types";

//Go through all filters create JSX for each button
export const FilterButtons = ({ filters, currentFilter, onFilter }) => {
	return (
		<>
			{filters.map((filter) => {
				return (
					<TextButton dark={true} key={filter} active={filter === currentFilter} onClick={() => onFilter(filter)}>
						{filter.toUpperCase()}
					</TextButton>
				);
			})}
		</>
	);
};

FilterButtons.propTypes = {
	filters: PropTypes.array.isRequired,
	currentFilter: PropTypes.string.isRequired,
	onFilter: PropTypes.func.isRequired,
};
