import { React, useState } from 'react'
import './TransactionForm.css'
import { BsQuestionCircleFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { Card } from '../../basic_components/card/Card'
import InputField from '../../basic_components/input/InputField'
import { cards } from '../../App'
import { FaRegCreditCard } from 'react-icons/fa'
import { Button } from '../../basic_components/button/Button'
import { HorizontalCardScrollbar } from '../horizontal_card_scrollbar/HorizontalCardScrollbar'
import { IoIosArrowDropleft } from 'react-icons/io'
import { AmountButton } from '../../basic_components/amount_button/AmountButton'


export const TransactionForm = (props) => {
    const { t, i18n } = useTranslation();
    const [cardScrollbar, setCardScrollbar] = useState(false);
    const money = [100, 200, 500, 1000, 5000];
    const [transaction, setTransaction] = useState({
        sender: '',
        receiver: '',
        amount: null,
        comment: ''
    })
    return (
        <>
            <div className="transaction_form">

                <div className="choose_card_text">
                    <h3 className="transaction_page_text">{t("transactions.choose_card")}:</h3>
                    <BsQuestionCircleFill className="transaction_icon" size={21} />

                </div>
                <HorizontalCardScrollbar
                    setCurrentCard={props.setCurrentCard}
                    currentCard={props.currentCard}
                />
                {!cardScrollbar ? (
                    <div className="trans_form_receiver_box">

                        <InputField
                            inpType='trans_form'
                            type='text'
                            label={`${t("transactions.receiver")}:`}
                            name='receiver'
                            className='trans_form_receiver'
                            placeholder='0000 0000 0000 0000'
                            className_label='transaction_page_text'
                        />
                        <FaRegCreditCard
                            className='trans_form_receiver_icon'
                            size={30}
                            onClick={() => setCardScrollbar(!cardScrollbar)}
                        />
                    </div>) : (<>
                        <div className="choose_card_text">
                            <h3 className="transaction_page_text">{t("transactions.receiver")}:</h3>
                            <IoIosArrowDropleft
                                className='transaction_icon'
                                size={26}
                                onClick={() => setCardScrollbar(!cardScrollbar)}
                            />
                        </div>
                        <HorizontalCardScrollbar

                            setCurrentCard={props.setCurrentCardReceiver}
                            currentCard={props.currentCardReceiver} />

                    </>)}
                <div className="trans_form_amount_box">

                    <InputField
                        inpType='trans_form'
                        type='text'
                        label={`${t("transactions.amount")}:`}
                        name='amount'
                        className='trans_form_amount'
                        placeholder='1000 UAH'
                        className_label='transaction_page_text'

                    />
                    <div className="trans_form_amount_button">
                        {money.map((e) => (
                            <AmountButton amount={e} />
                        ))}
                    </div>
                </div>
                <InputField
                    inpType='trans_form'
                    type='text'
                    label={`${t("transactions.message")}:`}
                    name='message'
                    className='trans_form_message'
                    placeholder={t('transactions.message_placeholder')}
                    className_label='transaction_page_text'
                />

                <div className="trans_form_button_box">
                    <Button
                        height={35}
                        buttonName={t("transactions.cancel")}
                        className='trans_form_button'
                    // disabled={!formValid}
                    // onClick={regUser}

                    />
                    <Button
                        height={35}
                        buttonName={t("transactions.confirm")}
                        // disabled={!formValid}
                        className='trans_form_button'
                    // onClick={regUser}

                    />


                </div>
            </div>
        </>
    )
}

