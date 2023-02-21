import React from 'react'
import { Card } from '../../basic_components/card/Card'
import './CardMenu.css'
import '../../basic_components/card/Card.css'
import { useTranslation } from 'react-i18next'


export const CardMenu = (props) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="CardMenu_wrapper"
                style={props.type === 'wallet' ? { 'height': 'calc(100vh - 110px)' } :
                    props.type === 'cardmenu' ? { 'height': 'calc(100vh - 60px)' } :
                        null}>
                <div className={`cardmenu_scrollbar ${props.className}`}>
                    {props.type === 'wallet' ? <div className='shared_wallet_header'>
                        {t("shared_wallet.available_wallets")}:
                    </div> : null}
                    {props.cardArray.map((e) => (
                        <Card
                            setCurrentCard={props.setCurrentCard}
                            currentCard={props.currentCard}
                            currentCardNum={props.currentCardNum}
                            setCurrentCardNum={props.setCurrentCardNum}
                            messageFunc={props.messageFunc}
                            type={props.type}
                            letter_spacing={2}
                            height={160}
                            card_number={e.title}
                            full_card_number={e.card_number}
                            card_ddl={e.deadline}
                            money={e.amount}
                            cvv={e.cvv}
                            id={e.id} />

                    ))}




                </div>
            </div>

        </>
    )
}

