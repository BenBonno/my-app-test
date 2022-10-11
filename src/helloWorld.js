import React from 'react';

const HelloWorld (props) => {
    return (
        <div className='big'>
            <h1>Hello World !</h1>
            <h2>Hello {props.name} !</h2>

        </div>
    )
}

export default HelloWorld
