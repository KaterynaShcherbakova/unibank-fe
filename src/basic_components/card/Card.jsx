import React from 'react'
import { Logo } from '../../img/Logo'
import './Card.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Card = (props) => {
    const { t } = useTranslation();
    const [isFlipped, setIsFlipped] = useState(false);
    const [clickedCard, setClickedCard] = useState(false);
    const [clickedCardNum, setClickedCardNum] = useState(false);
    const [showCardNumber, setShowCardNumber] = useState(false);
    const [showCvv, setShowCvv] = useState(false);

    const handleClickNumber = (e) => {
        e.stopPropagation();
        setShowCardNumber(!showCardNumber);
        if (showCardNumber) navigator.clipboard.writeText(props.full_card_number);

    }


    useEffect(() => {

        if (props.id === props.currentCard) {
            setClickedCard(true);

        }
        else if (clickedCard) setClickedCard(false);

    }, [props.currentCard])

    useEffect(() => {

        if (clickedCard) {
            setIsFlipped(true);
        }
        else setIsFlipped(false);


    }, [clickedCard])

    useEffect(() => {
        if (props.type === 'cardmenu' || props.type === 'wallet') {
            if (showCardNumber) {
                navigator.clipboard.writeText(props.full_card_number);
                props.messageFunc(true, t("message.clipboard_cardnum"), 'confirm');
                setTimeout(() => { setShowCardNumber(false) }, 7000);

            }
            else {
                props.messageFunc(false, t("message.clipboard_cardnum"), 'confirm');
            }

        }
      
    }, [showCardNumber])

    useEffect(() => {
        if (props.type === 'cardmenu' || props.type === 'wallet') {

            if (props.full_card_number === props.currentCardNum) {
                setClickedCardNum(true);
                console.log(props.currentCardNum);
                setTimeout(() => { setClickedCardNum(false) }, 7000);


            }
            else if (clickedCardNum) {
                // setShowCardNumber(true);
                setClickedCardNum(false);
            }
        }
    }, [props.currentCardNum])

    return (
        <>
            {props.type === 'cardmenu' ? (

                <div className={`flip-card`}
                    style={{
                        'border-radius': `${props.height * 0.05}px`,
                        'min-height': `${props.height}px`
                    }}>

                    <div className={`flip-card-inner ${isFlipped ? 'do-flip_card' : ''}`} >

                        <div className='Card'
                            style={{
                                'border-radius': `${props.height * 0.05}px`,
                                'position': 'absolute',
                                'min-height': `${props.height}px`
                            }}
                            onClick={(e) => {
                                if (clickedCard) { props.setCurrentCard(null) }
                                else { props.setCurrentCard(props.id) }
                            }}>

                            <Logo className='card_logo'
                                width={props.height * 0.375}
                                height={0.22 * props.height} />
                            <div className='card_number'
                                style={{
                                    'letter-spacing': `${props.letter_spacing}px`,
                                    'font-size': `${props.height * 0.1}px`
                                }}
                                onClick={(e) => {
                                    clickedCardNum ? props.setCurrentCardNum(null) :
                                        props.setCurrentCardNum(props.full_card_number); handleClickNumber(e);
                                }}
                            > {clickedCardNum ? props.full_card_number : props.card_number}</div>

                            <div className='card_ddl'
                                style={{
                                    'letter-spacing': `${props.letter_spacing}px`,
                                    'font-size': `${props.height * 0.1}px`
                                }}
                            >{props.card_ddl}</div>
                            <div className='card_end'>
                                <div className='card_company'
                                    style={{ 'font-size': `${props.height * 0.1}px` }}>VISA</div>
                                <div className='card_money'
                                    style={{
                                        'letter-spacing': `${props.letter_spacing}px`,
                                        'font-size': `${props.height * 0.1}px`
                                    }}>{props.money} UAH</div>

                            </div>
                        </div>

                        <div className="flip-card-back"
                            style={{
                                'border-radius': `${props.height * 0.05}px`,
                                'min-height': `${props.height}px`
                            }}
                            onClick={() => setIsFlipped(false)}>

                            <div className="card_back_black_stripe"
                                style={{ 'height': `${props.height * 0.28}px` }}></div>

                            <div className="cvv_box">
                                <h2 className="cvv_text"
                                    style={{ 'font-size': `${props.height * 0.1}px` }}>
                                    CVV:</h2>

                                <div className="card_back_cvv_box" style={{ 'border-radius': `${props.height * 0.03}px`, 'height': `${props.height * 0.15}px` }}>
                                    <h2 className="card_cvv" style={{ 'letter-spacing': `${props.letter_spacing}px`, 'font-size': `${props.height * 0.1}px` }} >{props.cvv}</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ) :
                props.type === 'wallet' ? (

                    <div className='Card Card-hover-wallet' style={{ 'border-radius': `${props.height * 0.05}px`, 'min-height': `${props.height}px`, 'border': `${props.borderSize} solid ${clickedCard ? props.borderColor : 'transparent'}` }}
                        onClick={() => {

                            if (clickedCard) { props.setCurrentCard(null); props.chooseCard(null) }
                            else { props.setCurrentCard(props.id); props.chooseCard(props.id) }

                        }}
                    >
                        <Logo className='card_logo' width={props.height * 0.375} height={0.22 * props.height} />
                        <div className='card_number'
                            style={{
                                'letter-spacing': `${props.letter_spacing}px`,
                                'font-size': `${props.height * 0.1}px`
                            }}
                            onClick={(e) => {
                                clickedCardNum ? props.setCurrentCardNum(null) :
                                    props.setCurrentCardNum(props.full_card_number);
                                handleClickNumber(e);
                            }}
                        > {clickedCardNum ? props.full_card_number : props.card_number}</div>

                        <div className='card_ddl' style={{ 'letter-spacing': `${props.letter_spacing}px`, 'font-size': `${props.height * 0.1}px` }}>{props.card_ddl}</div>
                
                        <div className="cvv_box_wallet" onClick={() =>{ setShowCvv(!showCvv);setTimeout(() => { setShowCvv(false) }, 7000) }}>

                            <div className="card_back_cvv_box_wallet" style={{ 'border-radius': `${props.height * 0.03}px`, 'height': `${props.height * 0.15}px` }}>
                                {showCvv ? <h2 className="card_cvv"
                                    style={{
                                        'letter-spacing': `${props.letter_spacing}px`,
                                        'font-size': `${props.height * 0.1}px`
                                    }} >
                                    {props.cvv}</h2> : null}
                            </div>
                        </div>

                        <div className='card_end'>
                            <div className='card_company' style={{ 'font-size': `${props.height * 0.1}px` }}>VISA</div>
                            <div className='card_money' style={{ 'letter-spacing': `${props.letter_spacing}px`, 'font-size': `${props.height * 0.1}px` }}>{props.money} UAH</div>

                        </div>
                    </div>

                ) :
                    (
                        <div className='Card Card-hover' style={{ 'border-radius': `${props.height * 0.05}px`, 'min-height': `${props.height}px`, 'border': `${props.borderSize} solid ${clickedCard ? props.borderColor : 'transparent'}` }}
                            onClick={() => {
                                if (!props.isCardArray) {
                                    if (clickedCard) { props.setCurrentCard(null); props.chooseCard(null) }
                                    else { props.setCurrentCard(props.id); props.chooseCard(props.id) }
                                }
                                else {
                                    props.setCurrentCard(props.id)
                                }
                            }}
                        >
                            <Logo className='card_logo' width={props.height * 0.375} height={0.22 * props.height} />
                            <div className='card_number' style={{ 'letter-spacing': `${props.letter_spacing}px`, 'font-size': `${props.height * 0.1}px` }} > {props.card_number}</div>
                            <div className='card_ddl' style={{ 'letter-spacing': `${props.letter_spacing}px`, 'font-size': `${props.height * 0.1}px` }}>{props.card_ddl}</div>
                            <div className='card_end'>
                                <div className='card_company' style={{ 'font-size': `${props.height * 0.1}px` }}>VISA</div>
                                <div className='card_money' style={{ 'letter-spacing': `${props.letter_spacing}px`, 'font-size': `${props.height * 0.1}px` }}>{props.money} UAH</div>

                            </div>
                        </div>)
            }
        </>
    )
}

