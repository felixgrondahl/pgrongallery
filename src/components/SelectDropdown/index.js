import React from "react";
import * as S from "./style";
import PropTypes from "prop-types";

const SelectDropdown = ({ options, onChange }) => {
	return (
		<S.SelectDropdown
			onChange={(event) => onChange(event.target.value)}
			value={options[0]}
		>
			{Object.entries(options).map(([, value]) => {
				return <option key={value}>{value}</option>;
			})}
		</S.SelectDropdown>
	);
};

SelectDropdown.propTypes = {
    options: PropTypes.object,
    onChange: PropTypes.func
}

export default SelectDropdown;
