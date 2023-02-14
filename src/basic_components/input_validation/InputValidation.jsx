import React from 'react'
import './InputValidation.css'
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsFillXCircleFill } from 'react-icons/bs'

export const InputValidation = (props) => {
    return (
        <>
            {props.error &&
                <div className={`form_message input_error ${props.classNameError}`}>
                    <BsFillXCircleFill className={`form_error_icon ${props.classNameErrorIcon}`}
                        onMouseLeave={() => props.messageFunc(false, props.error, props.messageType)}
                        onMouseEnter={() => props.messageFunc(true, props.error, props.messageType)} />
                </div>}

            {(!props.error && props.value) &&
                <div className={`form_message input_success ${props.classNameSuccess}`}>
                    <BsCheckCircleFill className={`form_success_icon ${props.classNameSuccessIcon}`} />
                </div>}
        </>
    )
}
