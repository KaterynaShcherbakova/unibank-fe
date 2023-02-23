import React from 'react'
import './Checkbox.css'

export const Checkbox = (props) => {
    return (
        <>
            <div className='checkbox-wrapper-48'>
                <label className={props.classNameDiv}>
                    <input type="checkbox"
                        className={`checkbox-wrapper-input ${props.disabled ? 'checkbox-wrapper-input-disabled':''}`}
                        disabled={props.disabled}
                        checked={props.checked}
                        value={props.value}
                        onChange={(e) => props.onChange(e)}
                        name={props.name} />
                    <p className={props.classNameText}>{props.text}</p>
                </label>

            </div>


        </>
    )
}

