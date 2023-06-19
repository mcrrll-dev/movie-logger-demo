import React, { useState } from 'react';

import uuid from 'react-uuid';

import EntryForm from './EntryForm';
import './NewEntry.css';

const NewEntry = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveEntryDataHandler = (enteredEntryData) => {
        const entryData = {
            ...enteredEntryData,
            id: uuid()
        }
        props.onAddEntry(entryData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-entry">
            {!isEditing && <button onClick={startEditingHandler}>Log New Film</button>}
            {isEditing && <EntryForm onSaveEntryData={saveEntryDataHandler} onCancel={stopEditingHandler} />}
        </div>

    )
};

export default NewEntry;