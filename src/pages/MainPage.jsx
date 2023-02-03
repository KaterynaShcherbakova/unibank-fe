import { React, useState } from 'react'
import { Background } from '../basic_components/background/Background';
import { CardMenu } from '../complex_components/card_menu/CardMenu';
import { HexagonBox } from '../complex_components/hexagon_box/HexagonBox';



export const MainPage = (props) => {
    const [currentCardNum, setCurrentCardNum] = useState('');
    const [currentCard, setCurrentCard] = useState(null);


    return (
        <div className='MainPage'>
            <Background page='main' />
            <CardMenu
                setCurrentCard={setCurrentCard}
                currentCard={currentCard}
                currentCardNum={currentCardNum}
                setCurrentCardNum={setCurrentCardNum}
                messageFunc={props.messageFunc} />
            <HexagonBox />

        </div>
    )
}
