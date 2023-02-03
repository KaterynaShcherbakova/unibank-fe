import {React, useState} from 'react'
import { Background } from '../basic_components/background/Background';
import { PageName } from '../basic_components/page_name/PageName';
import { useTranslation } from 'react-i18next'
import { TransactionForm } from '../complex_components/transaction_form/TransactionForm';
import { TemplateBlock } from '../complex_components/template_block/TemplateBlock';


export const TransactionPage = (props) => {
  const { t, i18n } = useTranslation();
  const [templateType, setTemplatesType] = useState('Recent');
  const [templateArray, setTemplateArray] = useState(props.recent);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentCardReceiver, setCurrentCardReceiver] = useState(null);


  const handleChangeTemplate = (e) => {
    const value = e.target.checked;
    console.log(value);
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
      <PageName color={'#171C27'} page_name={t("navigation.transactions")} />
      <div className="overdiv_transaction_page">
        <TemplateBlock
          handleChange={handleChangeTemplate}
          templateType={templateType}
          setCurrentTemplate={setCurrentTemplate}
          currentTemplate={currentTemplate}
          templateArray={templateArray}
        />
        <TransactionForm
          currentCardReceiver={currentCardReceiver}
          setCurrentCardReceiver={setCurrentCardReceiver}
          setCurrentCard={setCurrentCard}
          currentCard={currentCard} />
      </div>

    </div>

  )
}
