import Card from "./UI/Card";

import './Header.css'

const Header = () => {
    return (
        <Card className="header">
            <h1>React Movie Logger</h1>
            <p>This movie logger demo built with React allows entry of a film title, rating, and date watched. Logged films are displayed in a list and can be viewed by year.</p>
        </Card>
    )
}

export default Header;