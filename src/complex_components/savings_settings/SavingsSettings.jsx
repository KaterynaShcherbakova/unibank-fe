import { React, useEffect, useState } from 'react'
import './SavingsSettings.css'
import { useTranslation } from 'react-i18next'
import { Checkbox } from '../../basic_components/checkbox/Checkbox';
import { Button } from '../../basic_components/button/Button'

export const SavingsSettings = (props) => {
    const { t } = useTranslation();
    const [showPercentage, setShowPercentage] = useState(false);
    const [percentageError, setPercentageError] = useState(false);
    const [showRound, setShowRound] = useState(false);
    const [disabledOptions, setDisabledOptions] = useState(false);
    const [disabledDeactivate, setDisabledDeactivate] = useState(false);
    const [disabledSave, setDisabledSave] = useState(false);


    const round_to = [0, 1, 10, 100];
    const [settings, setSettings] = useState({
        percentage: '',
        round_to: '',
        deactivate: false
    })


    useEffect(() => {
        if ((!showPercentage && !showRound && !settings.deactivate) || percentageError) {
            setDisabledSave(true);
        }
        else {
            setDisabledSave(false);
        }

    }, [settings, showPercentage, showPercentage])

    const handleChangeInput = (e) => {
        const value = e.target.checked;

        if (e.target.name === 'percentage') {
            if (value) {
                setShowPercentage(true);
            }
            else {
                setShowPercentage(false);

            }

        }
        else if (e.target.name === 'round_to') {
            if (value) {
                setShowRound(true);
            }
            else {
                setShowRound(false);

            }
        }
        else if (e.target.name === 'deactivate') {
            if (value) {
                setShowPercentage(false);
                setShowRound(false);
                setDisabledOptions(true);
                setDisabledDeactivate(true);

                setSettings({
                    ...settings,
                    percentage: null
                });
                setSettings({
                    ...settings,
                    round_to: null
                });
                setSettings({
                    ...settings,
                    deactivate: true
                });
            }
            else {
                setSettings({
                    ...settings,
                    deactivate: false
                });
                setDisabledOptions(false);
                setDisabledDeactivate(false);

            }


        }

    }

    const handleChange = (e) => {
        const value = e.target.value;

        if (e.target.name === 'percentage') {
            if (value > 20) {
                setPercentageError(true);
            }
            else {
                setPercentageError(false);

            }
        }
        setSettings({
            ...settings,
            [e.target.name]: value
        });

    }

    const handleForm = () => {
        console.log(settings);
        props.messageFunc(true, t('savings.confirm_saved_settings'), 'confirm');
        setTimeout(() => {
            props.messageFunc(false, t('savings.confirm_saved_settings'), 'confirm');
        },
            5000);

        setSettings({
            percentage: '',
            round_to: '',
            deactivate: false
        });
        setPercentageError(false);
        setShowPercentage(false);
        setShowRound(false);
        setDisabledOptions(false);
        setDisabledDeactivate(false);
    }
    return (
        <>
            <div className="SavingsSettings">
                <h3 className="savings_setting_title">{t("savings.piggy_settings")}</h3>
                <div className='savings_settings_percent_overdiv'>
                    <Checkbox
                        disabled={disabledOptions}
                        checked={showPercentage}
                        name='percentage'
                        classNameDiv='savings_settings_percent'
                        classNameText={`savings_settings_text ${disabledOptions ? 'savings_settings_text_disabled' : ''}`}
                        classNameInput={`${disabledOptions ? 'checkbox_disabled' : ''}`}
                        text={t("savings.percent")}
                        onChange={handleChangeInput} />


                    <input
                        name='percentage'
                        className={
                            `${!showPercentage ? 'savings_settings_percent_input_hidden' : ''} 
                            savings_settings_percent_input 
                            ${percentageError ? 'savings_settings_percent_error' : ''}`}
                        value={settings.percentage}
                        onChange={(e) => handleChange(e)}
                        type='number'
                        onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                        placeholder='0.1 %'
                        max='20'
                        min='0'
                        step='0.5'
                    />
                </div>
                <div className='savings_settings_percent_overdiv'>
                    <Checkbox
                        checked={showRound}
                        disabled={disabledOptions}
                        name='round_to'
                        classNameDiv='savings_settings_percent'
                        classNameInput={`${disabledOptions ? 'checkbox_disabled' : ''}`}
                        classNameText={`savings_settings_text ${disabledOptions ? 'savings_settings_text_disabled' : ''}`}
                        text={t("savings.round_to")}
                        onChange={handleChangeInput} />
                    <select
                        defaultValue=""
                        name='round_to'
                        className={
                            `${!showRound ? 'savings_settings_percent_input_hidden' : ''} 
                            savings_settings_round_input`}
                        value={settings.round_to}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="" disabled selected hidden>0</option>
                        {round_to.map((opt) =>
                            (<option value={opt}>{opt}</option>)

                        )}


                    </select>

                </div>
                <div className='savings_settings_percent_overdiv'>
                    <Checkbox
                        checked={disabledDeactivate}
                        name='deactivate'
                        classNameDiv='savings_settings_percent'
                        classNameText='savings_settings_text'
                        classNameInput=''
                        text={t("savings.deactivate")}
                        onChange={handleChangeInput}
                    />
                </div>
                <Button
                    height={33}
                    buttonName={t("savings.save")}
                    disabled={disabledSave}
                    className='savings_button'
                    onClick={handleForm} />
            </div>
        </>
    )
}
