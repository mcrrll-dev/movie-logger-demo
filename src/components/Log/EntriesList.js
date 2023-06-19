import LoggedFilm from './LoggedFilm';
import './EntriesList.css'

const EntriesList = (props) => {
    if (props.entries.length === 0) {
        return <h2 className='entries-list__fallback'>No films logged for this year!</h2>;
    }

    const sortedEntries = props.entries.slice().sort((a, b) => b.date - a.date)

    return (
        <ul className="entries-list">
            {sortedEntries.map((entry) => (
                <LoggedFilm
                    key={entry.id}
                    title={entry.title}
                    rating={entry.rating}
                    date={entry.date}
                />
            ))}
        </ul>
    );
};

export default EntriesList;