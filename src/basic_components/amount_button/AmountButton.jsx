import React from 'react'
import './AmountButton.css'

export const AmountButton = (props) => {
    return (
        <>
            <button className="AmountButton"
                onClick={props.onClick}>
                <h6 className="amount_button_text">{props.amount}</h6>
            </button>
        </>
    )
}
