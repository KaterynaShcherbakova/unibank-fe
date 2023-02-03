import { useState, React, useEffect } from 'react'
import InputField from '../../basic_components/input/InputField'
import { Button } from '../../basic_components/button/Button'
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsFillXCircleFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const EMAIL_REGEX = /^[\w.]+@[\w]+\.[\w]+$/;
export const LoginForm = (props) => {
    const { t } = useTranslation();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        emailError: `${t("error.empty_email")}`,
        passwordError: `${t("error.empty_password")}`
    })
    const [input, setInput] = useState({
        email: false,
        password: false
    })


    const [formValid, setFormValid] = useState(false);

    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'email':
                setInput({
                    ...input,
                    email: true
                });
                break
            case 'password':
                setInput({
                    ...input,
                    password: true
                });
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const loginUser = () => {
        console.log(user);
        goToMain();
    }

    useEffect(() => {
        if (error.emailError || error.passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [error])


    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.name === 'email') {
            if (!e.target.value) {
                setError({
                    ...error,
                    emailError: `${t("error.empty_email")}`
                });

            }
            else if (!EMAIL_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    emailError: `${t("error.not_valid_email")}`
                });
            }
            else {
                setError({
                    ...error,
                    emailError: ''
                });
            }
        }

        if (e.target.name === 'password') {
            if (!e.target.value) {
                setError({
                    ...error,
                    passwordError: `${t("error.empty_password")}`
                });
            }
            else if (e.target.value.length < 8) {
                setError({
                    ...error,
                    passwordError: `${t("error.too_short_passsword")}`
                });
            }
            else {
                setError({
                    ...error,
                    passwordError: ''
                });
            }
        }
        setUser({
            ...user,
            [e.target.name]: value
        });
        console.log(user);
        console.log(error);
    }


    const goToMain = () => {

        window.location.assign('/');
    }


    return (

        <div className='container_login_form'>
            <form onSubmit={handleSubmit} className='login'>
                <div className='auth_form_title'>{t("auth.login")}</div>

                <div className='auth_input_fields'>
                    <div className="input_success_div">
                        <InputField
                            name='email'
                            type='email'
                            label={`${t("auth.email")}:`}
                            placeholder=''
                            className={`login_input ${(error.emailError && input.email) ? "form_input_error" : "form_input_success"}}`}
                            value={user.email}
                            onBlur={(e) => blurHandle(e)}
                            onChange={(e) => handleChange(e)}
                            inpType='auth_form'

                        />
                        {(error.emailError && input.email) &&
                            <div className="form_message input_error">
                                <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.emailError, 'error')} onMouseEnter={() => props.messageFunc(true, error.emailError, 'error')} />
                            </div>}

                        {(!error.emailError && input.email) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                    </div>

                    <div className="input_success_div">
                        <InputField
                            name='password'
                            type='password'
                            label={`${t("auth.password")}:`}
                            placeholder=''
                            className={`login_input ${(error.passwordError && input.password) ? "form_input_error" : "form_input_success"}}`}
                            value={user.password}
                            onBlur={e => blurHandle(e)}
                            onChange={(e) => handleChange(e)}
                            inpType='auth_form'


                        />
                        {(error.passwordError && input.password) &&
                            <div className="form_message input_error">
                                <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.passwordError, 'error')} onMouseEnter={() => props.messageFunc(true, error.passwordError, 'error')} />
                            </div>}

                        {(!error.passwordError && input.password) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                    </div>
                    <Button
                        height={40}
                        buttonName={t("auth.enter")}
                        disabled={!formValid}
                        className='auth_form_button'
                        type='submit'
                        onClick={loginUser}

                    />

                    <p className="auth_form_question"
                        onClick={() => props.onFormSwitch('signup')}
                    >
                        {t("auth.quest_login")}
                    </p>

                </div>

            </form>
        </div>
    )
}
