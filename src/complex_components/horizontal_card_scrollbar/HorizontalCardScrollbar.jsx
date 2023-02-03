import React from 'react'
import { Card } from '../../basic_components/card/Card'
import { cards } from '../../App'
import './HorizontalCardScrollbar.css'

export const HorizontalCardScrollbar = (props) => {
    
    return (
        <>
          
                <div className="choose_card_block">
                    <div className="choose_card_scrollbar">
                        {cards.map((e) => (
                            <Card
                                setCurrentCard={props.setCurrentCard}
                                currentCard={props.currentCard}
                                id={e.id}
                                type='trans_form'
                                letter_spacing={1}
                                height={70}
                                card_number={e.title}
                                card_ddl={e.deadline}
                                money={e.amount}
                                cvv={e.cvv} />

                        ))}
                    </div>
                </div>

               
        </>
    )
}

