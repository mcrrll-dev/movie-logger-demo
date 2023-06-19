import React, { useState } from 'react';

import Card from '../UI/Card'
import EntriesFilter from "../UI/EntriesFilter";
import EntriesList from './EntriesList';
import LogChart from './LogChart';
import './FilmLog.css'

const FilmLog = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredEntries = props.entries.filter(entry => {
        return entry.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="films">
                <EntriesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <LogChart entries={filteredEntries} />
                <EntriesList entries={filteredEntries} />
            </Card>
        </div>
    );
};

export default FilmLog;