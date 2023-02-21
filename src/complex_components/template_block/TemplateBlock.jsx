import React from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleSwitch } from '../../basic_components/toogle_switch/ToogleSwitch';
import { Template } from '../../basic_components/template/Template';
import './TemplateBlock.css'

export const TemplateBlock = (props) => {
    const { t } = useTranslation();

    return (

        <div className="template_block">
            <h2 className="transaction_templates_header">{t("transactions.templates")}</h2>
            <ToggleSwitch
                recent={t("transactions.recent")}
                popular={t("transactions.popular")}
                className='transaction_toogle'
                onChange={(e) => props.handleChange(e)}
            />
            <div className="TemplateBlock">
                <>
                    {props.templateArray.map((e) => (
                        <Template
                            transaction={props.transaction}
                            type={props.templateType}
                            setCurrentTemplate={props.setCurrentTemplate}
                            currentTemplate={props.currentTemplate}
                            id={e.id}
                            message={e.message}
                            cardNum={e.cardNum}
                            amount={e.amount}
                            title={e.title}
                            setCurrTransaction={props.setCurrTransaction}
                            currTransaction={props.currTransaction}
                        />

                    ))}
                </>
            </div>
        </div>



    )
}
