import React from 'react'
import './Checkbox.css'

export const Checkbox = (props) => {
    return (
        <>
            <div class="checkbox-wrapper-48">
                <label className={props.classNameDiv}>
                    <input type="checkbox"
                        onChange={(e) => props.onChange(e)}
                        name="cb" />
                    <p className={props.classNameText}>{props.text}</p>
                </label>

            </div>


        </>
    )
}

