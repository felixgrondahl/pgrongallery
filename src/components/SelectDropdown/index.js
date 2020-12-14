import React, { useState } from 'react';
import * as S from './style';

const SelectDropdown = ({options, onChange}) => {

    return (
        <S.SelectDropdown onChange={(event) => onChange(event.target.value)} value={options[0]}>
            {Object.entries(options).map(([key, value]) => {
                return (<option key={value}>{value}</option>)
            })}
        </S.SelectDropdown>
    );
}

export default SelectDropdown;