import React from 'react'

export const Button = (props) =>{
    return (
        <>
            <button
                disabled={props.disabled}
                className={`Button ${props.className}`}
                type={`${props.type}`}
                onClick={props.onClick}
            >
                {props.buttonName}
            </button>
        </>
    )
}

