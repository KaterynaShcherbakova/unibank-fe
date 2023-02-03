import React from 'react'
import './Template.css'
import { FaRegCreditCard } from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'
export const Template = (props) => {
    const [clickedTemplate, setClickedTemplate] = useState(false);

    useEffect(() => {
        if (props.id === props.currentTemplate) {
            setClickedTemplate(true);

        }
        else if (clickedTemplate) setClickedTemplate(false);

    }, [props.currentTemplate])
    return (

        <div className='template'
            style={clickedTemplate ? (props.type === 'Recent' ? { 'border': '3px solid #59A2C4' } : { 'border': '3px solid #6B7B81' }) : null}
            onClick={() => { clickedTemplate ? props.setCurrentTemplate(null) : props.setCurrentTemplate(props.id) }}>
            <FaRegCreditCard className="template_card_icon" size={30} />
            <div className="template_userinfo">
                <h5 className="template_username">{props.title}</h5>
                <h5 className="template_money">{props.amount} UAH</h5>
            </div>
        </div>

    )
}
