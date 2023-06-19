import React, { useState } from 'react';

import './EntryForm.css'

const EntryForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredRating, setEnteredRating] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const ratingChangeHandler = (e) => {
        setEnteredRating(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const entryData = {
            title: enteredTitle,
            rating: +enteredRating,
            date: new Date(enteredDate + 'T00:00')
        };

        props.onSaveEntryData(entryData);
        setEnteredTitle('');
        setEnteredRating('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-entry__controls">
                <div className="new-entry__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-entry__control">
                    <label>Rating</label>
                    <input type="number" value={enteredRating} min="0" max="5" step="0.25" onChange={ratingChangeHandler} />
                </div>
                <div className="new-entry__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2022-01-01" max="2024-01-01" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-entry__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Entry</button>
            </div>
        </form>
    )
}

export default EntryForm;