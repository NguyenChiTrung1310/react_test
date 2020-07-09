
import React from 'react'

const person = props => {
    return (
        <div>
           <h1>{props.name} + {props.age} years old</h1>
        </div>

    )
};

export default person;