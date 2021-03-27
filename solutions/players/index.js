import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Player = (props) => {
    return <div>
        <p>{props.name}</p>
        <p>{props.jerseyNumber}</p>
    </div>;
}

const PlayerList = () => {
    return (<div>
        <h1>Basketball players</h1>
        <Player name="Michael Jordan" jerseyNumber={23} />
        <Player name="Kobe Bryant" jerseyNumber={24} />
        <Player name="Larry Bird" jerseyNumber={33} />
    </div>);
}

const rootElement = document.getElementById('root');

ReactDOM.render(<PlayerList />, rootElement);