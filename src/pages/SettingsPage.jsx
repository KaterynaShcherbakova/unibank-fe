import { React } from 'react'
import { Background } from '../basic_components/background/Background'
import { Button } from '../basic_components/button/Button'
import { useTranslation } from 'react-i18next'



export const SettingsPage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);

    }
    return (
        <>
            <Background page='settings' />
            <div className="SettingsPage">
                <div className="settings_languages">
                    <Button
                        theme='auth'

                        buttonName='EN'
                        className='settings_button'
                        onClick={() => changeLanguage("en")}

                    />

                    <Button
                        theme='auth'

                        buttonName='UA'
                        className='settings_button'
                        onClick={() => changeLanguage("ua")}


                    />

                    <h2>{t("navigation.transactions")}</h2>
                </div>
            </div>
        </>
    )
}

