import { React, useEffect, useState } from 'react'
import './TransactionForm.css'
import { BsInfoCircleFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import InputField from '../../basic_components/input/InputField'
import { FaRegCreditCard } from 'react-icons/fa'
import { Button } from '../../basic_components/button/Button'
import { HorizontalCardScrollbar } from '../horizontal_card_scrollbar/HorizontalCardScrollbar'
import { IoIosArrowDropleft } from 'react-icons/io'
import { AmountButton } from '../../basic_components/amount_button/AmountButton'

export const TransactionForm = (props) => {
    const { t } = useTranslation();
    const [cardScrollbar, setCardScrollbar] = useState(false);
    const money = [100, 200, 500, 1000, 5000];
    const [formValid, setFormValid] = useState(false);
    const [error, setError] = useState('');
    const [tip, setTip] = useState('');
    const [onForm, setOnForm] = useState(false);

    const senderCard = (id) => {
        if (props.currForm === 'transaction') {
            props.setTransaction({
                ...props.transaction,
                sender: id
            });
        }

    }

    const receiverCard = (id) => {
        if (props.currForm === 'transaction') {
            props.setTransaction({
                ...props.transaction,
                receiver: {
                    ...props.transaction.receiver,
                    id: id,
                    cardNum: ''
                }
            });
        }

    }

    useEffect(() => {
        if (props.currForm === 'transaction') {

            if (cardScrollbar) {
                props.setTransaction({
                    ...props.transaction,
                    receiver: {
                        ...props.transaction.receiver,
                        cardNum: ''
                    }
                });

            }
            else {

                props.setTransaction({
                    ...props.transaction,
                    receiver: {
                        ...props.transaction.receiver,
                        id: null
                    }
                });
                props.setCurrentCardReceiver(null);

            }
        }
    }, [cardScrollbar])



    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        props.messageFunc(false, error, 'error_pages');
        if (props.currForm === 'transaction') {

            if (name === 'receiver') {
                props.setTransaction({
                    ...props.transaction,
                    receiver: {
                        ...props.transaction.receiver,
                        cardNum: (cc_format(value)),
                        id: null
                    }

                })
            }

            else {
                if (name === 'amount') {
                    value = value.replace(/[^0-9\.]/g, '');
                    value = value.replace(/^(?:[^1-9])*([0-9]{1,})((\.)([0-9]{1,2}){0,1}){0,1}(?:.{0,})$/g, '$1$3$4')
                }

                props.setTransaction({
                    ...props.transaction,
                    [name]: value
                })
            }
        }
    }

    const handleBlurAmount = (e) => {
        let value = e.target.value;
        if (value.match(/[0-9]+\./g)) {
            value = value + '00'
        }

        props.setTransaction({
            ...props.transaction,
            amount: value
        })
    }
    function cc_format(value) {
        const v = value
            .replace(/\s+/g, "")
            .replace(/[^0-9]/gi, "")
            .substr(0, 16);
        const parts = [];

        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4));
        }

        return parts.length > 1 ? parts.join(" ") : v;
    }


    useEffect(() => {
        if (props.currForm === 'transaction') {

            if (!props.transaction.sender) {
                setError(t('transactions.error_choose_card_send'))
            }
            else if (!props.transaction.receiver.cardNum && !props.transaction.receiver.id) {
                setError(t('transactions.error_choose_card_receive'))

            }
            else if (props.transaction.receiver.cardNum && props.transaction.receiver.cardNum.length !== 19) {
                setError(t('transactions.error_wrong_cardNum'));

            }
            else if (!props.transaction.amount) {
                setError(t('transactions.error_amount'))

            }
            else {
                setError('');
            }
            if (!props.transaction.message) {
                setTip(t('transactions.tip_comment'))
            }
            else setTip('');
        }

    }, [props.transaction])

    useEffect(() => {
        if (!error) setFormValid(true);
        else setFormValid(false);
    }, [error])

    const handleCancel = () => {

        props.setTransaction({
            sender: null,
            receiver: {
                id: null,
                cardNum: ''
            },
            amount: '',
            message: ''
        })
        props.setCurrentCard(null);
        props.setCurrentCardReceiver(null);
        setCardScrollbar(false);
        setError(false);
        setTip(false);
        setFormValid(false);
        setOnForm(false);
    }

    const handleSave = () => {
        console.log(props.transaction);
        props.messageFunc(true, t('transactions.success_transacted'), 'confirm');
        setTimeout(() => {
            props.messageFunc(false, t('transactions.success_transacted'), 'confirm');
        },
            5000);

        handleCancel();

    }


    useEffect(() => {
        if (props.currForm === 'transaction') {
            if (props.currTransaction) {
                props.setTransaction({
                    ...props.transaction,
                    receiver: {
                        ...props.transaction.receiver,
                        cardNum: props.currTransaction.title
                    },
                    amount: props.currTransaction.amount,
                    message: props.currTransaction.message
                });
            }
        }
    }, [props.currTransaction])
    return (
        <>
            <div className="transaction_form" onMouseEnter={() => setOnForm(true)} onMouseLeave={() => setOnForm(false)}>

                <div className="choose_card_text">
                    <h3 className="transaction_page_text">{t("transactions.choose_card")}:</h3>
                    <BsInfoCircleFill
                        className="transaction_icon"
                        size={21}
                        color={!onForm ? '#6B7B81' : formValid && !tip ? '#6B7B81' : error ? '#6e1f1f' : tip ? '#dba944' : '#171C27'}

                        onMouseLeave={() => { error ? props.messageFunc(false, error, 'error_pages') : tip ? props.messageFunc(false, tip, 'tip') : props.messageFunc(false, '', '') }}
                        onMouseEnter={() => { error ? props.messageFunc(true, error, 'error_pages') : tip ? props.messageFunc(true, tip, 'tip') : props.messageFunc(false, '', '') }}
                    />

                </div>
                <HorizontalCardScrollbar
                    borderSize='3px'
                    borderColor='#6B7B81'
                    color='#6B7B81'
                    width={55}
                    setCurrentCard={props.setCurrentCard}
                    currentCard={props.currentCard}
                    chooseCard={senderCard}

                />
                {!cardScrollbar ? (
                    <div className="trans_form_receiver_box">

                        <InputField

                            onChange={handleChange}
                            value={props.currForm === 'transaction' ? props.transaction.receiver.cardNum : ''}
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
                            borderSize='3px'
                            borderColor='#6B7B81'
                            color='#6B7B81'
                            width={55}
                            setCurrentCard={props.setCurrentCardReceiver}
                            currentCard={props.currentCardReceiver}
                            chooseCard={receiverCard}

                        />

                    </>)}
                <div className="trans_form_amount_box">

                    <InputField

                        value={props.transaction.amount}
                        inpType='trans_form'
                        type='text'
                        label={`${t("transactions.amount")}:`}
                        name='amount'
                        className='trans_form_amount'
                        placeholder='1000 UAH'
                        className_label='transaction_page_text'
                        onChange={handleChange}
                        onBlur={handleBlurAmount}


                    />
                    <div className="trans_form_amount_button">
                        {money.map((e) => (
                            <AmountButton
                                amount={e}
                                onClick={() => props.setTransaction({
                                    ...props.transaction,
                                    amount: e
                                })
                                } />
                        ))}
                    </div>
                </div>
                <InputField
                    value={props.currForm === 'transaction' ? props.transaction.message : ''}
                    inpType='trans_form'
                    type='text'
                    label={`${t("transactions.message")}:`}
                    name='message'
                    className='trans_form_message'
                    placeholder={t('transactions.message_placeholder')}
                    className_label='transaction_page_text'
                    onChange={handleChange}
                />

                <div className="trans_form_button_box">
                    <Button
                        height={35}
                        buttonName={t("transactions.cancel")}
                        className='trans_form_button'
                        onClick={() => handleCancel()}

                    />
                    <Button
                        height={35}
                        buttonName={t("transactions.confirm")}
                        disabled={!formValid}
                        className='trans_form_button'
                        onClick={() => handleSave()}

                    />


                </div>
            </div>
        </>
    )
}

