import { React, useState } from 'react'
import { Background } from '../basic_components/background/Background'
import { useTranslation } from 'react-i18next'
import { PageName } from '../basic_components/page_name/PageName';
import { ErrorMessage } from '../basic_components/message/ErrorMessage';
import { CardMenu } from '../complex_components/card_menu/CardMenu';
import { wallets } from '../App';
import './Pages.css'
import { WalletMainForm } from '../complex_components/wallet_main_form/WalletMainForm';
function SharedWalletPage() {
    const { t } = useTranslation();
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [messageTheme, setMessageTheme] = useState('');
    const [currentCardNum, setCurrentCardNum] = useState('');
    const [currentCard, setCurrentCard] = useState(null);
    const [currForm, setCurrForm] = useState('')
    const [takeOut, setTakeOut] = useState({
        wallet: null,
        receiver: {
            id: null,
            cardNum: ''
        },
        amount: '',

    })
    const [topUp, setTopUp] = useState({
        sender: null,
        wallet: null,
        amount: '',

    })
    const messageFunc = (state, text, theme) => {
        setShowMessage(state);
        setMessage(text);
        setMessageTheme(theme);
    }

    return (
        <>

            <div className='SharedWalletPage'>
                <Background page='shared wallet' />
                <ErrorMessage
                    showMessage={showMessage}
                    message={message}
                    messageTheme={messageTheme}
                />
                <PageName color={'#171C27'} page_name={t("navigation.shared_wallet")} />

                <div className="shared_wallet_main_block">
                    <CardMenu
                        type='wallet'
                        className='wallet_menu'
                        cardArray={wallets}
                        setCurrentCard={setCurrentCard}
                        currentCard={currentCard}
                        currentCardNum={currentCardNum}
                        setCurrentCardNum={setCurrentCardNum}
                        messageFunc={messageFunc} />
                        
                    <WalletMainForm
                        transaction={currForm === 'takeOut' ? takeOut : topUp}
                        setTransaction={currForm === 'takeOut' ? setTakeOut : setTopUp}
                        setCurrForm={setCurrForm}
                        currForm={currForm} />
                </div>
            </div>
        </>
    )
}

export default SharedWalletPage