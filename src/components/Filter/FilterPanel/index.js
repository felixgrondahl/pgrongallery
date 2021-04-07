import React from "react";
import { FilterButtons } from "../FilterButtons";
import { ButtonsWrapper } from "./style";
import PropTypes from "prop-types";

export const FilterPanel = ({ filters, currentFilter, onFilter }) => {
	return (
		<ButtonsWrapper>
			<FilterButtons filters={filters} currentFilter={currentFilter} onFilter={(filter) => onFilter(filter)} />
		</ButtonsWrapper>
	);
};

FilterPanel.propTypes = {
	filters: PropTypes.array.isRequired,
	currentFilter: PropTypes.string.isRequired,
	onFilter: PropTypes.func.isRequired,
};
