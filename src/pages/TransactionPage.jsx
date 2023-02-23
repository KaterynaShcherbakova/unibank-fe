import { React, useState } from 'react'
import { Background } from '../basic_components/background/Background';
import { PageName } from '../basic_components/page_name/PageName';
import { useTranslation } from 'react-i18next'
import { TransactionForm } from '../complex_components/transaction_form/TransactionForm';
import { TemplateBlock } from '../complex_components/template_block/TemplateBlock';
import { ErrorMessage } from '../basic_components/message/ErrorMessage';

export const TransactionPage = (props) => {
  const { t, i18n } = useTranslation();
  const [templateType, setTemplatesType] = useState('Recent');
  const [templateArray, setTemplateArray] = useState(props.recent);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentCardReceiver, setCurrentCardReceiver] = useState(null);
  const [currTransaction, setCurrTransaction] = useState({
    amount: '',
    title: '',
    message: ''
  })
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [messageTheme, setMessageTheme] = useState('');

  const [transaction, setTransaction] = useState({
    sender: null,
    receiver: {
      id: null,
      cardNum: ''
    },
    amount: '',
    message: ''
  })


  const messageFunc = (state, text, theme) => {
    setShowMessage(state);
    setMessage(text);
    setMessageTheme(theme);
  }
  const handleChangeTemplate = (e) => {
    const value = e.target.checked;
    // setCurrentTemplate(null);

    if (value) {
      setTemplatesType('Popular');
      setTemplateArray(props.popular);

    }
    else {
      setTemplatesType('Recent');
      setTemplateArray(props.recent);
    }
  }


  return (
    <div className='TransactionPage'>
      <Background page='transactions' />
      <ErrorMessage
        showMessage={showMessage}
        message={message}
        messageTheme={messageTheme}
      />
      <PageName color={'#171C27'} page_name={t("navigation.transactions")} />
      <div className="overdiv_transaction_page">
        <TemplateBlock
          handleChange={handleChangeTemplate}
          templateType={templateType}
          setCurrentTemplate={setCurrentTemplate}
          currentTemplate={currentTemplate}
          templateArray={templateArray}
          setCurrTransaction={setCurrTransaction}
          currTransaction={currTransaction}
          transaction={transaction}

        />
        <TransactionForm
        currForm='transaction'
          transaction={transaction}
          setTransaction={setTransaction}
          currentCardReceiver={currentCardReceiver}
          setCurrentCardReceiver={setCurrentCardReceiver}
          setCurrentCard={setCurrentCard}
          currentCard={currentCard}
          messageFunc={messageFunc}
          currTransaction={currTransaction}
          setCurrTransaction={setCurrTransaction}

        />
      </div>

    </div>

  )
}
