import { React, useEffect, useState } from 'react'
import './SavingsFuncs.css'
import '../../complex_components/validation/AuthForm.css'
import { useTranslation } from 'react-i18next'
import { FiFlag } from 'react-icons/fi'
import { RiCoinsLine } from 'react-icons/ri'
import { IoIosHammer } from 'react-icons/io'
import { FaMoneyBillWave } from 'react-icons/fa'
import { FaRegCreditCard } from 'react-icons/fa'
import { Button } from '../../basic_components/button/Button'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import InputField from '../../basic_components/input/InputField'
import { HorizontalCardScrollbar } from '../horizontal_card_scrollbar/HorizontalCardScrollbar'
import brokenPiggybank from '../../img/BrokenPiggybank.png'
import { InputValidation } from '../../basic_components/input_validation/InputValidation'

const NUM_REGEX = /^[0-9]{1,}(?:\.[0-9]{1,2}){0,1}$/;

export const SavingsFuncs = (props) => {
    const { t } = useTranslation();
    const [goal, setGoal] = useState(null);
    const [goalError, setGoalError] = useState(false);
    const [feed, setFeed] = useState({
        card: null,
        amount: null

    });
    const [feedError, setFeedError] = useState('');
    const [takeOut, setTakeOut] = useState({
        card: null,
        amount: null
    });
    const [takeOutError, setTakeOutError] = useState('');
    const [cardToEmpty, setCardToEmpty] = useState(null);
    const [cardToEmptyError, setCardToEmptyError] = useState(null);
    const [disabledOk, setDisabledOk] = useState(false);

    let funcArray = [{
        id: 1,
        Icon: FiFlag,
        text: t("savings.change_goal")
    },
    {
        id: 2,
        Icon: RiCoinsLine,
        text: t("savings.feed_piggy")
    },
    {
        id: 3,
        Icon: FaMoneyBillWave,
        text: t("savings.take_money_out")
    },
    {
        id: 4,
        Icon: IoIosHammer,
        text: t("savings.empty_piggy")
    },
    {
        id: 5,
        Icon: FaRegCreditCard,
        text: t("savings.choose_card")
    },
    ]
    const [doFlip, setDoFlip] = useState(false);
    const [clickedId, setClickedId] = useState(null);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        props.messageFunc(false, '', '')
        if (name === 'goal') {
            if (!value) {
                setGoalError(t("savings.error_empty_field"));
            }
            else if (!NUM_REGEX.test(value)) {
                setGoalError(t("savings.error_field"));
            }
            else {
                setGoalError('');
            }
            setGoal(value);
        }

        if (name === 'feed') {
            setFeed({
                ...feed,
                amount: value
            });
        }

        if (name === 'take_out') {
            setTakeOut({
                ...takeOut,
                amount: value
            });
        }

    }

    const chooseCardToFeed = (id) => {
        setFeed({
            ...feed,
            card: id
        });


    }
    const chooseCardToEmpty = (id) => {

        if (!id) setCardToEmptyError(t("savings.error_choose_card"))
        else setCardToEmptyError('')
        setCardToEmpty(id);

    }
    const chooseCardToTakeOut = (id) => {
        setTakeOut({
            ...takeOut,
            card: id
        });

    }
    const handleCancel = () => {

        if (clickedId == 4) props.messageFunc(false, t("savings.tip_empty_savings"), 'tip');
        setGoal(null);
        setGoalError(false);
        setFeed({
            card: null,
            amount: null
        });
        setFeedError('');
        setTakeOut({
            card: null,
            amount: null
        });
        setTakeOutError('');
        setCardToEmpty(null);
        setCardToEmptyError('');
        props.setCurrentCardEmpty(null);
        props.setCurrentCardFeed(null);
        props.setCurrentCardTakeOut(null);

    }

    const handleSave = () => {
        console.log(goal);
        console.log(feed);
        console.log(takeOut);
        console.log(cardToEmpty);
        console.log(props.feedingArray)
        handleCancel();
    }

    const validate = (obj, setError) => {
        if (!obj.card) {
            setError(t("savings.error_choose_card"));
            return;
        }
        if (!obj.amount) {
            setError(t("savings.error_empty_field"));
            return;
        }
        if (!NUM_REGEX.test(obj.amount)) {
            setError(t("savings.error_field"));
            return;
        }
        setError('');
    }



    useEffect(() => {
        validate(feed, setFeedError);
        validate(takeOut, setTakeOutError);


    }, [feed, takeOut])

    

    useEffect(() => {
        switch (clickedId) {
            case 1: {
                if (goalError) setDisabledOk(true);
                else setDisabledOk(false);
                break;
            }
            case 2: {
                if (feedError) setDisabledOk(true);
                else setDisabledOk(false);
                break;

            }
            case 3: {
                if (takeOutError) setDisabledOk(true);
                else setDisabledOk(false);
                break;

            }
            case 4: {
                setDisabledOk(false);
                if (cardToEmptyError) setDisabledOk(true);
                else setDisabledOk(false);
                break;

            }
            case 5: {
               
                if (props.curr_card_amount === 0) setDisabledOk(true);
                else setDisabledOk(false);
                break;
            }
            default: setDisabledOk(true);
        }

    }, [goalError, feedError, takeOutError, cardToEmptyError, props.curr_card_amount])



    return (
        <>
            <div class="savings-flip-box" >
                <div class={`savings-flip-box-inner ${doFlip ? 'do-flip_func' : ''}`} >

                    <div className="SavingsFunc">
                        {funcArray.map((O) => (
                            <div className="savings_func_row" onClick={() => { setClickedId(O.id); setDoFlip(true) }}>
                                <O.Icon size={28} />
                                <h2 className="savings_func_text">{O.text}</h2>
                            </div>))}
                    </div>


                    <div class="savings-flip-box-back">
                        <AiOutlineDollarCircle color='#e5ebec' size={25} className='savings_func_icon' />
                        {clickedId === 1 ? <>
                            <div className="input_success_div">
                                <InputValidation
                                    error={goalError}
                                    classNameError='input_error_savings'
                                    classNameErrorIcon='error_icon_savings'
                                    messageType='error_pages'
                                    value={goal}
                                    classNameSuccess='input_success_savings'
                                    classNameSuccessIcon='success_icon_savings'
                                    messageFunc={props.messageFunc}
                                />
                            </div>

                            <div className="savings_func_param_text">{t("savings.curr_goal")}: {props.goal} UAH</div>

                            <label className="savings_func_param_text new_goal">{t("savings.new_goal")}:
                                <InputField
                                    value={goal}
                                    type='text'
                                    name='goal'
                                    className={`savings_func_input new_goal_input ${goalError ? "form_input_error" : "form_input_success"}}`}
                                    placeholder='1000 UAH'
                                    onChange={handleChange}
                                />

                            </label>

                        </> :
                            clickedId === 2 ? <>
                                {!feed.card && !feed.amount ? null :
                                    <div className="input_success_div">
                                        <InputValidation
                                            error={feedError}
                                            classNameError='input_error_savings'
                                            classNameErrorIcon='error_icon_savings'
                                            messageType='error_pages'
                                            value={feed.amount}
                                            classNameSuccess='input_success_savings'
                                            classNameSuccessIcon='success_icon_savings'
                                            messageFunc={props.messageFunc}
                                        />
                                    </div>
                                }

                                <div className="savings_func_feeding_div">
                                    <HorizontalCardScrollbar
                                        setCurrentCard={props.setCurrentCardFeed}
                                        currentCard={props.currentCardFeed}
                                        borderSize='2px'
                                        borderColor='#171C27'
                                        color='#e5ebec'
                                        width={17}
                                        className='savings_func_scrollbar_feed'
                                        chooseCard={chooseCardToFeed}
                                    />

                                    <label className="savings_func_feeding_text">{t("savings.sum")}:
                                        <InputField
                                            value={feed.amount}
                                            type='text'
                                            name='feed'
                                            className={`savings_func_input feed_input ${feedError ? "form_input_error" : "form_input_success"}}`}
                                            placeholder='1000 UAH'
                                            onChange={handleChange}
                                        />

                                    </label>
                                </div>
                            </>
                                :
                                clickedId === 3 ? <>
                                    {!takeOut.card && !takeOut.amount ? null :
                                        <div className="input_success_div">
                                            <InputValidation
                                                error={takeOutError}
                                                classNameError='input_error_savings'
                                                classNameErrorIcon='error_icon_savings_takeout'
                                                messageType='error_pages'
                                                value={takeOut.amount}
                                                classNameSuccess='input_success_savings'
                                                classNameSuccessIcon='success_icon_savings'
                                                messageFunc={props.messageFunc}
                                            />
                                        </div>}
                                    <div className="savings_func_feeding_div">
                                        <HorizontalCardScrollbar
                                            setCurrentCard={props.setCurrentCardTakeOut}
                                            currentCard={props.currentCardTakeOut}
                                            borderSize='2px'
                                            borderColor='#171C27'
                                            color='#e5ebec'
                                            width={17}
                                            className='savings_func_scrollbar_takeout'
                                            chooseCard={chooseCardToTakeOut}

                                        />
                                        <label className="savings_func_feeding_text">{t("savings.sum")}:
                                            <InputField
                                                value={takeOut.amount}
                                                type='text'
                                                name='take_out'
                                                className={`savings_func_input takeout_input ${takeOutError !== '' ? "form_input_error" : "form_input_success"}}`}
                                                placeholder='1000 UAH'
                                                onChange={handleChange}

                                            />
                                        </label>
                                    </div>

                                </> :
                                    clickedId === 4 ? <>
                                        {cardToEmpty ? props.messageFunc(true, t("savings.tip_empty_savings"), 'tip') : props.messageFunc(false, t("savings.tip_empty_savings"), 'tip')}
                                        <div className="savings_func_feeding_div">
                                            <div className="savings_func_empty_div">
                                                <h3 className="savings_func_empty_piggy_text">
                                                    {t("savings.empty_your_piggy")}
                                                </h3>
                                                <img src={brokenPiggybank} className="broken_piggy_icon" />

                                            </div>
                                            <HorizontalCardScrollbar
                                                setCurrentCard={props.setCurrentCardEmpty}
                                                currentCard={props.currentCardEmpty}
                                                borderSize='2px'
                                                borderColor='#59A2C4'
                                                color='#e5ebec'
                                                width={25}
                                                className='savings_func_scrollbar_empty'
                                                chooseCard={chooseCardToEmpty}
                                            />

                                        </div>
                                    </> :
                                        clickedId === 5 ? <>
                                            <div className="savings_func_feeding_div">
                                                <div className="savings_func_cards_to_feed">

                                                    <h3 className="savings_func_cards_piggy_text">
                                                        {t("savings.cards_to_feed_piggy")}:
                                                    </h3>
                                                    <div className="savings_func_cards_amount">{props.curr_card_amount}</div>
                                                </div>
                                                <HorizontalCardScrollbar

                                                    isCardArray={true}
                                                    setCurrentCard={props.addCardToFeed}
                                                    feedingArray={props.feedingArray}
                                                    borderSize='2px'
                                                    borderColor='#59A2C4'
                                                    color='#e5ebec'
                                                    width={25}
                                                    className='savings_func_scrollbar_empty'
                                                />

                                            </div>
                                        </> : null}

                        <div className="savings_func_button_div">
                            <Button
                                height={32}
                                buttonName={t("savings.back")}
                                className='savings_func_button'
                                onClick={() => {
                                    setDoFlip(false);
                                    setClickedId(null);
                                    handleCancel();
                                }}
                            />

                            <Button
                                height={32}
                                buttonName={clickedId === 1 || clickedId === 4 || clickedId === 5 ?
                                    t("savings.ok") : clickedId === 2 ?
                                        t("savings.feed") : clickedId === 3 ?
                                            t("savings.take_out") : null}
                                className='savings_func_button'
                                disabled={disabledOk}
                                onClick={() => {
                                    handleSave();
                                    setDoFlip(false);
                                    setClickedId(null);
                                }}
                            />

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
