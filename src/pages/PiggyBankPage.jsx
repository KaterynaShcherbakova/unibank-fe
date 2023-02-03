import React from 'react'
import { useTranslation } from 'react-i18next'
import { Background } from '../basic_components/background/Background'
import { PageName } from '../basic_components/page_name/PageName';
import PiggyBalance from '../basic_components/savings_balance/PiggyBalance';
import { PiggyGoal } from '../basic_components/savings_goal/PiggyGoal';
import { SavingsFuncs } from '../basic_components/savings_func/SavingsFuncs';
import { SavingsSettings } from '../basic_components/savings_settings/SavingsSettings';


export const PiggyBankPage = () => {
  const { t, i18n } = useTranslation();
  let goal = 17000;
  let currAmount = 1456;
  return (
    <div className='PiggyBankPage'>
      <Background page='savings' />
      <PageName color={'#e5ebec'} page_name={t("navigation.piggy_bank")} />
      <div className="savings_upper_block">
        <div className="savings_page_balance_box">
          <PiggyBalance amount={currAmount} />
          <PiggyGoal goal={goal} now={(currAmount / goal) * 100} />
        </div>
        <SavingsFuncs />
      </div>
      <SavingsSettings />
    </div>
  )
}
