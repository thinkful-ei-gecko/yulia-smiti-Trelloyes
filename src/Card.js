import React from 'react';
import './Card.css';

function Card(props){
    console.log(props)
    return (
        <div class="Card">
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
};

export default Card;
