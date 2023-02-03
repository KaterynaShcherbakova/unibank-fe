import React from 'react'
import { Card } from '../../basic_components/card/Card'
import './CardMenu.css'
import '../../basic_components/card/Card.css'
import { cards } from '../../App'
export const CardMenu = (props) => {
    return (
        <>


            <div className="CardMenu_wrapper">
                <div className='cardmenu_scrollbar'>

                    {cards.map((e) => (
                        <Card
                            setCurrentCard={props.setCurrentCard}
                            currentCard={props.currentCard}
                            currentCardNum={props.currentCardNum}
                            setCurrentCardNum={props.setCurrentCardNum}
                            messageFunc={props.messageFunc}
                            type={'cardmenu'}
                            letter_spacing={2}
                            height={160}
                            card_number={e.title}
                            full_card_number={e.card_number}
                            card_ddl={e.deadline}
                            money={e.amount}
                            cvv={e.cvv} 
                            id={e.id}/>

                    ))}




                </div>
            </div>

        </>
    )
}

