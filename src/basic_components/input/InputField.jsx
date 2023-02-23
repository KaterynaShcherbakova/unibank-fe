import { React } from 'react'
import './InputField.css'


export const InputField = (props) => {

    return (
        <>
            <label className='input_label'>
                <p className={`input_label_text ${props.className_label}`}>{props.label}</p>
                <input
                    name={props.name}
                    type={props.type}
                    className={`InputField ${props.className}`}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={(e) => props.onChange(e)}
                    onBlur={(e) => props.onBlur(e)}
                    style={props.inpType === 'auth_form' ? {
                        'min-height': '34px',
                        'min-width': '280px',
                        'min-width': '300px',
                        'margin-top': '2px',
                        'margin-bottom': '12px'
                    } : null}
                >
                </input>
            </label>
        </>
    )
}

export default InputField