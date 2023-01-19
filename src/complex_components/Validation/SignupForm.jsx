import { useState, React, useEffect } from 'react'
import InputField from '../../basic_components/InputField'
import '../../basic_components/InputField.css'
import { Button } from '../../basic_components/Button'
import '../../basic_components/Button.css'
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsFillXCircleFill } from 'react-icons/bs'

const NAME_REGEX = /^[\p{L}][\p{L} '-]{1,32}$/u
// /^[A-Za-z][A-Za-z -]{2,45}$/u;
///^[\p{L} ,.'-]+$/u
const EMAIL_REGEX = /^[\w.]+@[\w]+\.[\w]+$/;
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
export const SignupForm = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        patronymic: '',
        email: '',
        password: '',
        confirmPass: ''
    })

    const [error, setError] = useState({
        firstName: 'Name can not be empty!',
        lastName: 'Surname can not be empty!',
        patronymic: 'Patronymic can not be empty!',
        email: 'Email can not be empty!',
        password: 'Password can not be empty!',
        confirmPass: 'Please, confirm password!'
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
                    firstName: 'Name can not be empty!'
                });

            }
            else if (!NAME_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    firstName: 'Name is not valid!'
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
                    lastName: 'Surname can not be empty!'
                });
            }
            else if (!NAME_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    lastName: 'Surname is not valid!'
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
                    patronymic: 'Patronymic can not be empty!'
                });

            }
            else if (!NAME_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    patronymic: 'Parronymic is not valid!'
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
                    email: 'Email can not be empty!'
                });

            }
            else if (!EMAIL_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    email: 'Email is not valid!'
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
                    password: 'Password can not be empty!'
                });
            }
            else if (e.target.value.length < 8) {
                setError({
                    ...error,
                    password: 'Password must be at least 8 charachters long!'
                });
            }
            else if (!PWD_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    password: 'Password must contain no symbols, 1 digit, 1 upper and 1 lower letter!'
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
                    confirmPass: 'Please, confirm password!'
                });


            }
            else if (e.target.value != user.password) {
                setError({
                    ...error,
                    confirmPass: 'Passwords do not match!'
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
                    <div className='auth_form_title'>Sign Up</div>
                    <div className='auth_input_fields'>
                        <div className="input_success_div">
                            <InputField
                                name='firstName'
                                type='text'
                                label='Name:'
                                placeholder=''
                                className={`login_input ${error.firstName && input.firstName ? "form_input_error" : "form_input_success"}}`}
                                value={user.firstName}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />
                            {(error.firstName && input.firstName) &&
                                <div className="form_message input_error" >
                                    <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.firstName)} onMouseEnter={() => props.messageFunc(true, error.firstName)} />
                                </div>}

                            {(!error.firstName && input.firstName) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <div className="input_success_div">
                            <InputField
                                name='lastName'
                                type='text'
                                label='Surname:'
                                placeholder=''
                                className={`login_input ${error.lastName && input.lastName ? "form_input_error" : "form_input_success"}}`}
                                value={user.lastName}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />
                            {(error.lastName && input.lastName) && 
                            <div className="form_message input_error">
                                <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.lastName)} onMouseEnter={() => props.messageFunc(true, error.lastName)} />
                                </div>}

                            {(!error.lastName && input.lastName) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>

                        <div className="input_success_div">
                            <InputField
                                name='patronymic'
                                type='text'
                                label='Patronymic:'
                                placeholder=''
                                className={`login_input ${error.patronymic && input.patronymic ? "form_input_error" : "form_input_success"}}`}
                                value={user.patronymic}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />
                            {(error.patronymic && input.patronymic) &&
                             <div className="form_message input_error">
                                <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.patronymic)} onMouseEnter={() => props.messageFunc(true, error.patronymic)} />
                                </div>}

                            {(!error.patronymic && input.patronymic) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <div className="input_success_div">
                            <InputField
                                name='email'
                                type='email'
                                label='Email:'
                                placeholder=''
                                className={`login_input ${error.email && input.email ? "form_input_error" : "form_input_success"}}`}
                                value={user.email}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />

                            {(error.email && input.email) && 
                            <div className="form_message input_error">
                                <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.email)} onMouseEnter={() => props.messageFunc(true, error.email)}/>
                                </div>}

                            {(!error.email && input.email) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <div className="input_success_div">
                            <InputField
                                name='password'
                                type='password'
                                label='Password:'
                                placeholder=''
                                className={`login_input ${error.password && input.patronymic ? "form_input_error" : "form_input_success"}}`}
                                value={user.password}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />

                            {(error.password && input.password) && 
                            <div className="form_message input_error">
                                <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.password)} onMouseEnter={() => props.messageFunc(true, error.password)}/>
                                </div>}

                            {(!error.password && input.password) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <div className="input_success_div">
                            <InputField
                                name='confirmPass'
                                type='password'
                                label=' Confirm password:'
                                placeholder=''
                                className={`login_input ${error.confirmPass && input.confirmPass ? "form_input_error" : "form_input_success"}}`}
                                value={user.confirmPass}
                                inpType='auth_form'
                                onBlur={(e) => blurHandle(e)}
                                onChange={(e) => handleChange(e)}

                            />

                            {(error.confirmPass && input.confirmPass) && 
                            <div className="form_message input_error">
                                <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.confirmPass)} onMouseEnter={() => props.messageFunc(true, error.confirmPass)}/>
                                </div>}

                            {(!error.confirmPass && input.confirmPass) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                        </div>
                        <Button
                            buttonName='Join'
                            disabled={!formValid}
                            className='auth_form_button'
                            type='submit'
                            onClick={regUser}

                        />

                        <p className="auth_form_question"
                            onClick={() => props.onFormSwitch('login')}
                        >
                            Already have an account? Log in
                        </p>

                    </div>

                </form>
            </div >
        </>
    )
}

