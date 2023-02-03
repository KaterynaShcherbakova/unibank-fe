import { useState, React, useEffect } from 'react'
import InputField from '../../basic_components/input/InputField'
import { Button } from '../../basic_components/button/Button'
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsFillXCircleFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
const NAME_REGEX = /^[\p{L}][\p{L} '-]{1,32}$/u
// /^[A-Za-z][A-Za-z -]{2,45}$/u;
///^[\p{L} ,.'-]+$/u
const EMAIL_REGEX = /^[\w.]+@[\w]+\.[\w]+$/;
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
export const SignupForm = (props) => {
    const { t } = useTranslation();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        patronymic: '',
        email: '',
        password: '',
        confirmPass: ''
    })

    const [error, setError] = useState({
        firstName: `${t("error.empty_name")}`,
        lastName: `${t("error.empty_surname")}`,
        patronymic: `${t("error.empty_patronymic")}`,
        email: `${t("error.empty_email")}`,
        password: `${t("error.empty_password")}`,
        confirmPass: `${t("error.empty_confirm_pass")}`
    })


    const [input, setInput] = useState({
        firstName: false,
        lastName: false,
        patronymic: false,
        email: false,
        password: false,
        confirmPass: false
    })

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (error.firstName || error.lastName || error.patronymic || error.confirmPass || error.email || error.password) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [error])

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
            case 'confirmPass':
                setInput({
                    ...input,
                    confirmPass: true
                });
                break
            case 'firstName':
                setInput({
                    ...input,
                    firstName: true
                });
                break

            case 'lastName':
                setInput({
                    ...input,
                    lastName: true
                });
                break
            case 'patronymic':
                setInput({
                    ...input,
                    patronymic: true
                });
                break

        }
    }


    const regUser = () => {
        console.log(user);
        goToMain();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.name === 'firstName') {
            if (!e.target.value) {
                setError({
                    ...error,
                    firstName: `${t("error.empty_name")}`
                });

            }
            else if (!NAME_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    firstName: `${t("error.not_valid_name")}`
                });
            }
            else {
                setError({
                    ...error,
                    firstName: ''
                });
            }
        }

        if (e.target.name === 'lastName') {
            if (!e.target.value) {
                setError({
                    ...error,
                    lastName: `${t("error.empty_surname")}`
                });
            }
            else if (!NAME_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    lastName: `${t("error.not_valid_surname")}`
                });
            }
            else {
                setError({
                    ...error,
                    lastName: ''
                });
            }
        }

        if (e.target.name === 'patronymic') {
            if (!e.target.value) {
                setError({
                    ...error,
                    patronymic: `${t("error.empty_patronymic")}`
                });

            }
            else if (!NAME_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    patronymic: `${t("error.not_valid_patronymic")}`
                });
            }
            else {
                setError({
                    ...error,
                    patronymic: ''
                });
            }
        }
        if (e.target.name === 'email') {
            if (!e.target.value) {
                setError({
                    ...error,
                    email: `${t("error.empty_email")}`
                });

            }
            else if (!EMAIL_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    email: `${t("error.not_valid_email")}`
                });
            }
            else {
                setError({
                    ...error,
                    email: ''
                });
            }
        }


        if (e.target.name === 'password') {
            if (!e.target.value) {
                setError({
                    ...error,
                    password: `${t("error.empty_password")}`
                });
            }
            else if (e.target.value.length < 8) {
                setError({
                    ...error,
                    password: `${t("error.too_short_passsword")}`
                });
            }
            else if (!PWD_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    password: `${t("error.not_valid_password")}`
                });

            }

            else {
                setError({
                    ...error,
                    password: ''
                });
            }
        }

        if (e.target.name === 'confirmPass') {
            if (!e.target.value) {
                setError({
                    ...error,
                    confirmPass: `${t("error.empty_confirm_pass")}`
                });


            }
            else if (e.target.value != user.password) {
                setError({
                    ...error,
                    confirmPass: `${t("error.not_valid_confirm_pass")}`
                });


            }

            else {
                setError({
                    ...error,
                    confirmPass: ''
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
        props.onFormSwitch('login')
    }

    return (
        <>
            <div className='container_signup_form'>
                <form onSubmit={handleSubmit}
                    className='signup'>
                    <div className='auth_form_title'>{t("auth.signup")}</div>
                    <div className='auth_input_fields'>
                        <div className="input_success_div">
                            <InputField
                                name='firstName'
                                type='text'
                                label={`${t("auth.name")}:`}
                                placeholder=''
                                className={`login_input ${error.firstName && input.firstName ? "form_input_error" : "form_input_success"}}`}
                                value={user.firstName}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />
                            {(error.firstName && input.firstName) &&
                                <div className="form_message input_error" >
                                    <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.firstName, 'error')} onMouseEnter={() => props.messageFunc(true, error.firstName, 'error')} />
                                </div>}

                            {(!error.firstName && input.firstName) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <div className="input_success_div">
                            <InputField
                                name='lastName'
                                type='text'
                                label={`${t("auth.surname")}:`}
                                placeholder=''
                                className={`login_input ${error.lastName && input.lastName ? "form_input_error" : "form_input_success"}}`}
                                value={user.lastName}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />
                            {(error.lastName && input.lastName) &&
                                <div className="form_message input_error">
                                    <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.lastName, 'error')} onMouseEnter={() => props.messageFunc(true, error.lastName, 'error')} />
                                </div>}

                            {(!error.lastName && input.lastName) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>

                        <div className="input_success_div">
                            <InputField
                                name='patronymic'
                                type='text'
                                label={`${t("auth.patronymic")}:`}
                                placeholder=''
                                className={`login_input ${error.patronymic && input.patronymic ? "form_input_error" : "form_input_success"}}`}
                                value={user.patronymic}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />
                            {(error.patronymic && input.patronymic) &&
                                <div className="form_message input_error">
                                    <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.patronymic, 'error')} onMouseEnter={() => props.messageFunc(true, error.patronymic, 'error')} />
                                </div>}

                            {(!error.patronymic && input.patronymic) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <div className="input_success_div">
                            <InputField
                                name='email'
                                type='email'
                                label={`${t("auth.email")}:`}
                                placeholder=''
                                className={`login_input ${error.email && input.email ? "form_input_error" : "form_input_success"}}`}
                                value={user.email}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />

                            {(error.email && input.email) &&
                                <div className="form_message input_error">
                                    <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.email, 'error')} onMouseEnter={() => props.messageFunc(true, error.email, 'error')} />
                                </div>}

                            {(!error.email && input.email) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <div className="input_success_div">
                            <InputField
                                name='password'
                                type='password'
                                label={`${t("auth.password")}:`}
                                placeholder=''
                                className={`login_input ${error.password && input.patronymic ? "form_input_error" : "form_input_success"}}`}
                                value={user.password}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />

                            {(error.password && input.password) &&
                                <div className="form_message input_error">
                                    <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.password, 'error')} onMouseEnter={() => props.messageFunc(true, error.password, 'error')} />
                                </div>}

                            {(!error.password && input.password) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <div className="input_success_div">
                            <InputField
                                name='confirmPass'
                                type='password'
                                label={`${t("auth.confirm_pass")}:`}
                                placeholder=''
                                className={`login_input ${error.confirmPass && input.confirmPass ? "form_input_error" : "form_input_success"}}`}
                                value={user.confirmPass}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />

                            {(error.confirmPass && input.confirmPass) &&
                                <div className="form_message input_error">
                                    <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.confirmPass, 'error')} onMouseEnter={() => props.messageFunc(true, error.confirmPass, 'error')} />
                                </div>}

                            {(!error.confirmPass && input.confirmPass) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <Button
                            height={40}
                            buttonName={t("auth.join")}
                            disabled={!formValid}
                            className='auth_form_button'
                            type='submit'
                            onClick={regUser}

                        />

                        <p className="auth_form_question"
                            onClick={() => props.onFormSwitch('login')}
                        >
                            {t("auth.quest_signup")}
                        </p>

                    </div>

                </form>
            </div >
        </>
    )
}

