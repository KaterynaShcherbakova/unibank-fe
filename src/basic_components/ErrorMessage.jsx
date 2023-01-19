import React, { useState } from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'

export const ErrorMessage = (props) => {


    return (
        <div className={`ErrorMessage ${!props.showMessage ? 'ErrorMessage_hidden': ''}`}>
            <div className='error_message_text'>{props.message}</div>

            <RiErrorWarningLine
                className='error_message_icon'
                color={'#6e1f1f'}
                size={22}
            />
        </div>
    )
}
