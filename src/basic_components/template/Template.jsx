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

    }, [props.currentTemplate, props.type])

    useEffect(() => {
        if (props.currTransaction.amount !== props.transaction.amount
            || props.currTransaction.title !== props.transaction.receiver.cardNum
            ||  props.currTransaction.message !== props.transaction.message) {
            props.setCurrentTemplate(null);
       
        }

    }, [ props.transaction])



    return (

        <div className='template'
            style={clickedTemplate ?
                (props.type === 'Recent' ?
                    { 'border': '3px solid #59A2C4' } :
                    { 'border': '3px solid #6B7B81' }) :
                { 'border': '3px solid transparent' }
            }

            onClick={() => {
                (clickedTemplate ?
                    props.setCurrentTemplate(null) :
                    props.setCurrentTemplate(props.id));
                props.setCurrTransaction({
                    amount: props.amount,
                    title: props.cardNum,
                    message:props.message
                })
            }}>

            <FaRegCreditCard className="template_card_icon" size={30} />
            <div className="template_userinfo">
                <h5 className="template_username">{props.title}</h5>
                <h5 className="template_money">{props.amount} UAH</h5>
            </div>
        </div>

    )
}
