// import React from 'react'; pas necessaire car présent dans index.js qui est parent de APP.js
import { useState } from "react"

const HelloWorld = (props) => {
    const [red, setRed] = useState(false)

    // const colorHandler = () => setRed(!red) permet de mettre dans le onClick une fonction (sans parenthese juste avec accolade : remplace setRed(!red)) par {colorHandler}

    return (
        <div className='big'>
            <h1 className={red && "red"} onClick={() => { setRed(!red) }}>Hello World !</h1>
            <h2>Hello {props.name} !</h2>

        </div>
    )
}


export default HelloWorld
