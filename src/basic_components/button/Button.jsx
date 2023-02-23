import React from 'react'
import './Button.css'

export const Button = (props) => {
    return (
        <>
            <button
                disabled={props.disabled}
                className={`Button ${props.className}`}
                type={props.type}
                onClick={props.onClick}
                style={{
                    'height': `${props.height}px`,
                    'font-size': `${props.height * 0.475}px`,
                    // 'margin-top': `${props.type==='submit' && props.height * 0.125}px`,
                    // 'margin-bottom': `${props.type==='submit' && props.height * 0.125}px`
                }}
            >
                {props.buttonName}
            </button>
        </>
    )
}

