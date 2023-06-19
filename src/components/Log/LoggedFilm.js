import React from 'react';

import LogDate from './LogDate';
import Card from '../UI/Card'
import './LoggedFilm.css'

const LoggedFilm = (props) => {
    return (
        <li>
            <Card className="logged-film">
                <LogDate date={props.date} />
                <div className="logged-film__description">
                    <h2>{props.title}</h2>
                    <div className="logged-film__rating">{props.rating}</div>
                </div>
            </Card>
        </li>
    )
}

export default LoggedFilm;