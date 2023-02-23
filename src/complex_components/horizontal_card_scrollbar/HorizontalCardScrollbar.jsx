import React from 'react'
import { Card } from '../../basic_components/card/Card'
import { cards } from '../../App'
import './HorizontalCardScrollbar.css'

export const HorizontalCardScrollbar = (props) => {
    const cssVar = { '--scrollbar': `${props.color}` }

    return (
        <>

            <div className={`choose_card_block ${props.className}`} style={{ 'max-width': `${props.width}vw`, ...cssVar }}>
                <div className="choose_card_scrollbar">
                    {cards.map((e) => (
                        <Card
                            isCardArray={props.isCardArray}
                            borderSize={props.borderSize}
                            borderColor={props.borderColor}
                            setCurrentCard={props.setCurrentCard}
                            currentCard={props.isCardArray ? props.feedingArray.includes(e.id) ? e.id : null : props.currentCard}
                            id={e.id}
                            type='trans_form'
                            letter_spacing={1}
                            height={70}
                            card_number={e.title}
                            card_ddl={e.deadline}
                            money={e.amount}
                            cvv={e.cvv}
                            chooseCard={props.chooseCard} />

                    ))}
                </div>
            </div>


        </>
    )
}

