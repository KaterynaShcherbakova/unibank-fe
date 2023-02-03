import React from 'react'
import './SavingsFuncs.css'
import { useTranslation } from 'react-i18next'
import { FiFlag } from 'react-icons/fi'
import {RiCoinsLine} from 'react-icons/ri'
import {IoIosHammer} from 'react-icons/io'
import {FaMoneyBillWave} from 'react-icons/fa'
import {FaRegCreditCard} from 'react-icons/fa'

export const SavingsFuncs = () => {
    const { t } = useTranslation();
    let funcArray = [{
        Icon: FiFlag,
        text: t("savings.change_goal")
    },
    {
        Icon: RiCoinsLine,
        text: t("savings.feed_piggy")
    },
    {
        Icon: FaMoneyBillWave,
        text: t("savings.take_money_out")
    },
    {
        Icon: IoIosHammer,
        text: t("savings.empty_piggy")
    },
    {
        Icon: FaRegCreditCard,
        text: t("savings.choose_card")
    },
    ]
    return (
        <>
            <div className="SavingsFunc">
                {funcArray.map((O) => (
                    <div className="savings_func_row">
                        <O.Icon size={28} />
                        <h2 className="savings_func_text">{O.text}</h2>
                    </div>))}
            </div>
        </>
    )
}
