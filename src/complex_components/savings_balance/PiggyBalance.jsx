import React from 'react'
import './PiggyBalance.css'
import piggybank from '../../img/Piggybank.png'

export const PiggyBalance = (props) => {
    return (
        <>
            <div className="PiggyBalance">
                <img src={piggybank} className="piggy_balance_icon" />
                <h1 className="piggy_balance_money">{props.amount} UAH</h1>
            </div>
        </>
    )
}

export default PiggyBalance