import React, { useState } from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'
import { BsCheck2Circle } from 'react-icons/bs'
import { HiOutlineLightBulb } from 'react-icons/hi'
import './ErrorMessage.css'
export const ErrorMessage = (props) => {


    return (
        <div className={`ErrorMessage ${!props.showMessage ? 'ErrorMessage_hidden' : ''}`}
            style={props.messageTheme === 'error' ? { 'border': '2px solid #6e1f1f' } :
                props.messageTheme === 'confirm' ? { 'border': '2px solid #5aa37d', 'margin-top': '40px', 'z-index': '2' } :
                    props.messageTheme === 'error_pages' ? { 'border': '2px solid #6e1f1f', 'margin-top': '40px', 'z-index': '2' } :
                        props.messageTheme === 'tip' ? { 'border': '2px solid #dba944', 'margin-top': '40px', 'z-index': '2' } : null}>
            <div className='error_message_text'>{props.message}</div>
            <div className="error_message_icon">
                {props.messageTheme === 'error' || props.messageTheme === 'error_pages' ?
                    (<RiErrorWarningLine
                        color={'#6e1f1f'}
                        size={23}
                        style={{ 'minSize': '40px' }}
                    />) :
                    props.messageTheme === 'tip' ?
                        (<HiOutlineLightBulb
                            color={'#dba944'}
                            size={23}
                            style={{ 'minSize': '40px' }}
                        />) : (
                            <BsCheck2Circle
                                color={'#5aa37d'}
                                size={23}
                                style={{ 'minSize': '40px' }}
                            />
                        )


                }
            </div>
        </div>
    )
}
