import React, { Component } from 'react';
import '../style/DevNameCard.css';

class DevNameCard extends Component {
    render() {
        return (
            <div className="DevNameCard" onClick={() => alert((new Date).toLocaleString('ru'))}>
                <div className="name">Вася Пупкин</div>
            </div>
        );
    }
}

export default DevNameCard;