import React from 'react'
import './PiggyGoal.css'
import { useTranslation } from 'react-i18next';
import { ProgressBarStripe } from '../progress_bar/ProgressBarStripe';

export const PiggyGoal = (props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className="PiggyGoal">
                <div className="piggy_goal_box">
                    <h1 className='piggy_goal_text piggy_goal_text_goal'>{t("savings.goal")}:</h1>
                    <h1 className="piggy_goal_text piggy_goal_text_money">{props.goal} UAH</h1>
                </div>
                <ProgressBarStripe now={props.now}/>
            </div>
        </>
    )
}

