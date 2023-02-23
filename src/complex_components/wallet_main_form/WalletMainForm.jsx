import React from 'react'
import { TransactionForm } from '../transaction_form/TransactionForm'
import WalletHeader from '../wallet_header/WalletHeader'
import './WalletMainForm.css'

export const WalletMainForm = (props) => {
    return (
        <div className='WalletMainForm'>
            <WalletHeader
                setCurrForm={props.setCurrForm}
                currForm={props.currForm}
            />
           
        </div>
    )
}
