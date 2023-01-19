import { useState, React, useEffect } from 'react'
import InputField from '../../basic_components/InputField'
import '../../basic_components/InputField.css'
import { Button } from '../../basic_components/Button'
import '../../basic_components/Button.css'
import { BsCheckCircleFill } from 'react-icons/bs'
import { BsFillXCircleFill } from 'react-icons/bs'

const EMAIL_REGEX = /^[\w.]+@[\w]+\.[\w]+$/;
export const LoginForm = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        emailError: 'Email can not be empty!',
        passwordError: 'Password can not be empty!'
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
                    emailError: 'Email can not be empty!'
                });

            }
            else if (!EMAIL_REGEX.test(e.target.value)) {
                setError({
                    ...error,
                    emailError: 'Email is not valid!'
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
                    passwordError: 'Password can not be empty!'
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
                <div className='auth_form_title'>Log In</div>

                <div className='auth_input_fields'>
                    <div className="input_success_div">
                        <InputField
                            name='email'
                            type='email'
                            label='Email:'
                            placeholder=''
                            className={`login_input ${(error.emailError && input.email) ? "form_input_error" : "form_input_success"}}`}
                            value={user.email}
                            onBlur={(e) => blurHandle(e)}
                            onChange={(e) => handleChange(e)}
                            inpType='auth_form'

                        />
                        {(error.emailError && input.email) &&
                            <div className="form_message input_error">
                                <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.emailError)} onMouseEnter={() => props.messageFunc(true, error.emailError)} />
                            </div>}

                        {(!error.emailError && input.email) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                    </div>

                    <div className="input_success_div">
                        <InputField
                            name='password'
                            type='password'
                            label='Password:'
                            placeholder=''
                            className={`login_input ${(error.passwordError && input.password) ? "form_input_error" : "form_input_success"}}`}
                            value={user.password}
                            onBlur={e => blurHandle(e)}
                            onChange={(e) => handleChange(e)}
                            inpType='auth_form'


                        />
                        {(error.passwordError && input.password) &&
                            <div className="form_message input_error">
                                <BsFillXCircleFill className="form_error_icon" onMouseLeave={() => props.messageFunc(false, error.passwordError)} onMouseEnter={() => props.messageFunc(true, error.passwordError)} />
                            </div>}

                        {(!error.passwordError && input.password) && <div className="form_message input_success"><BsCheckCircleFill className="form_success_icon" /></div>}
                    </div>
                    <Button
                        buttonName='Enter'
                        disabled={!formValid}
                        className='auth_form_button'
                        type='submit'
                        onClick={loginUser}

                    />

                    <p className="auth_form_question"
                        onClick={() => props.onFormSwitch('signup')}
                    >
                        Don't have an account? Sign up
                    </p>

                </div>

            </form>
        </div>
    )
}
