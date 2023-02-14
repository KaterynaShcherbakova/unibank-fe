import { React, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Background } from '../basic_components/background/Background'
import { PageName } from '../basic_components/page_name/PageName';
import PiggyBalance from '../complex_components/savings_balance/PiggyBalance';
import { PiggyGoal } from '../complex_components/savings_goal/PiggyGoal';
import { SavingsFuncs } from '../complex_components/savings_func/SavingsFuncs';
import { SavingsSettings } from '../complex_components/savings_settings/SavingsSettings';
import { ErrorMessage } from '../basic_components/message/ErrorMessage';


export const PiggyBankPage = () => {
  const [currentCardTakeOut, setCurrentCardTakeOut] = useState(null);
  const [currentCardFeed, setCurrentCardFeed] = useState(null);
  const [currentCardEmpty, setCurrentCardEmpty] = useState(null);
  const [feedingArray, setFeedingArray] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [messageTheme, setMessageTheme] = useState('');

  const messageFunc = (state, text, theme) => {
    setShowMessage(state);
    setMessage(text);
    setMessageTheme(theme);
  }

  const addCardToFeed = (a) => {
    const index = feedingArray.indexOf(a);

    if (index === -1) setFeedingArray([...feedingArray, a]);
    else setFeedingArray(feedingArray.filter((e) =>  e !== a ));
  }

  const { t, i18n } = useTranslation();
  let goal = 17000;
  let currAmount = 1456;
  return (
    <div className='PiggyBankPage'>
      <Background page='savings' />
      <ErrorMessage
        showMessage={showMessage}
        message={message}
        messageTheme={messageTheme}
      />
      <PageName color={'#e5ebec'} page_name={t("navigation.piggy_bank")} />
      <div className="savings_upper_block">
        <div className="savings_page_balance_box">
          <PiggyBalance amount={currAmount} />
          <PiggyGoal goal={goal} now={(currAmount / goal) * 100} />
        </div>
        <SavingsFuncs
          setCurrentCardTakeOut={setCurrentCardTakeOut}
          currentCardTakeOut={currentCardTakeOut}
          setCurrentCardFeed={setCurrentCardFeed}
          currentCardFeed={currentCardFeed}
          setCurrentCardEmpty={setCurrentCardEmpty}
          currentCardEmpty={currentCardEmpty}
          curr_card_amount={feedingArray.length}
          goal={goal}
          feedingArray={feedingArray}
          addCardToFeed={addCardToFeed}
          curr_money_amount={currAmount}
          messageFunc={messageFunc} />
      </div>
      <SavingsSettings />
    </div>
  )
}
