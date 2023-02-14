import { React, useState } from 'react'
import { Background } from '../basic_components/background/Background';
import { CardMenu } from '../complex_components/card_menu/CardMenu';
import { HexagonBox } from '../complex_components/hexagon_box/HexagonBox';
import { ErrorMessage } from '../basic_components/message/ErrorMessage';



export const MainPage = (props) => {
    const [currentCardNum, setCurrentCardNum] = useState('');
    const [currentCard, setCurrentCard] = useState(null);

    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [messageTheme, setMessageTheme] = useState('');

    const messageFunc = (state, text, theme) => {
        setShowMessage(state);
        setMessage(text);
        setMessageTheme(theme);
    }


    return (
        <div className='MainPage'>
            <Background page='main' />
            <ErrorMessage
                showMessage={showMessage}
                message={message}
                messageTheme={messageTheme}
            />
            <CardMenu
                setCurrentCard={setCurrentCard}
                currentCard={currentCard}
                currentCardNum={currentCardNum}
                setCurrentCardNum={setCurrentCardNum}
                messageFunc={messageFunc} />
            <HexagonBox />

        </div>
    )
}
