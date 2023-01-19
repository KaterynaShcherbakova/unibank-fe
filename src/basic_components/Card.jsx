import React from 'react'
import { Logo } from './Logo'

export const Card = (props) => {

    return (
        <>
            <div className='Card'>
                <Logo className='card_logo' big={true} height={35} />
                <div className='card_number'>{props.card_number}</div>
                <div className='card_ddl'>{props.card_ddl}</div>
                <div className='card_end'>
                    <div className='card_company'>VISA</div>
                    <div className='card_money'>{props.money} UAH</div>

                </div>
            </div>
        </>
    )
}

