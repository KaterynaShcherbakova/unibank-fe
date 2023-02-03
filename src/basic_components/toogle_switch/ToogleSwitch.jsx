import React from 'react'
import './ToggleSwitch.css'

export const ToggleSwitch = (props) => {
    const cssVar = { '--recent': `"${props.recent}"`, '--popular': `"${props.popular}"` }
    return (

        <div className="button r button-1">
            <input type="checkbox"
                className="checkbox"
                onChange={(e) => props.onChange(e)}
            />
            <div className="knobs" style={cssVar}> </div>
            <div className="layer"></div>
        </div>

    )
}

