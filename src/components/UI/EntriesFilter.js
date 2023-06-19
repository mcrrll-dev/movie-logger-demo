import React, { useState } from 'react';

import './EntriesFilter.css';

const EntriesFilter = (props) => {
    const dropdownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value);
    }

    return (
        <div className='entries-filter'>
            <div className='entries-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default EntriesFilter;