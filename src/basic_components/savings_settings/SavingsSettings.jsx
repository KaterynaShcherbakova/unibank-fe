import { React, useState } from 'react'
import './SavingsSettings.css'
import { useTranslation } from 'react-i18next'
import { Checkbox } from '../checkbox/Checkbox';

export const SavingsSettings = () => {
    const { t } = useTranslation();
    const [showPercentage, setShowPercentage] = useState(false);
    const [percentageError, setPercentageError] = useState(false);
    const [settings, setSettings] = useState({
        percentage: null,
        round_to: null,
        deactivate: false
    })
    const handleChangePercentInput = (e) => {
        const value = e.target.checked;

        if (value) {
            setShowPercentage(true);
        }
        else {
            setShowPercentage(false);

        }
    }

    const handleChangePercent = (e) => {
        const value = e.target.value;
        if (value > 20) {
         
            setPercentageError(true);
        }
        else {
            setPercentageError(false);

        }
    }
    return (
        <>
            <div className="SavingsSettings">
                <h3 className="savings_setting_title">{t("savings.piggy_settings")}</h3>
                <div className='savings_settings_percent_overdiv'>
                    <Checkbox
                        classNameDiv='savings_settings_percent'
                        classNameText='savings_settings_text'
                        text={t("savings.percent")}
                        onChange={handleChangePercentInput} />
                    <input
                        className={`${!showPercentage ? 'savings_settings_percent_input_hidden' : ''} savings_settings_percent_input ${percentageError ? 'savings_settings_percent_error' : ''}`}
                        value={settings.percentage}
                        onChange={(e) => handleChangePercent(e)}
                        type='number'
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                        placeholder='0.1 %'
                        max='20'
                        min='0'
                        step='0.5'
                    />
                </div>
            </div>
        </>
    )
}
