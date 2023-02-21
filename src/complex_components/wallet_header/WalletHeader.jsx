import React from 'react'
import { Button } from '../../basic_components/button/Button'
import './WalletHeader.css'
import { useTranslation } from 'react-i18next'
import { IoMdAddCircle } from 'react-icons/io'


function WalletHeader(props) {
    const { t } = useTranslation();

    return (
        <div className='WalletHeader'>
            <IoMdAddCircle
                className='wallet_header_icon'
                size={35} />
            <Button
                height={27}
                buttonName={t("shared_wallet.top_up")}
                // disabled={!formValid}
                className='trans_form_button'
                onClick={()=>props.setCurrForm('top_up')}
            />
            <Button
                height={27}
                buttonName={t("shared_wallet.take_out")}
                // disabled={!formValid}
                className='trans_form_button'
                onClick={()=>props.setCurrForm('take_out')}

            />


        </div>
    )
}

export default WalletHeader