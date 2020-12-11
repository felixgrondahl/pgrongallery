import React, { useState } from 'react';
import * as S from './style';

const SelectDropdown = (props) => {

    const [options, setOptions] = useState(props.options);
    // const [selected, setSelected] = useState(options[0] ? options[0] : '');

    // const change = (event) => {
    //     setSelected(event.value);
    //     props.onChange(event.value);
    // }

    return (
        <S.SelectDropdown onChange={(event) => props.onChange(event.target.value)} value={options[0]}>
            {Object.entries(options).map(([key, value]) => {
                return (<option key={value}>{value}</option>)
            })}
        </S.SelectDropdown>
    );
}

export default SelectDropdown;