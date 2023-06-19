import './LogDate.css';

const LogDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return (
        <div className="log-date">
            <div className="log-date__month">{month}</div>
            <div className="log-date__day">{day}</div>
            <div className="log-date__year">{year}</div>
        </div>
    )
}

export default LogDate;