import { useState, React } from 'react'
import { LoginForm } from '../complex_components/validation/LoginForm';
import { SignupForm } from '../complex_components/validation/SignupForm';
import '../complex_components/validation/AuthForm.css'
import { Background } from '../basic_components/background/Background';
import { ErrorMessage } from '../basic_components/message/ErrorMessage';

function AuthPage(props) {

    const [currForm, setCurrForm] = useState('signup');
    const toggleForm = (formName) => {
        setCurrForm(formName);
    }

    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [messageTheme, setMessageTheme] = useState('');

    const messageFunc = (state, text, theme) => {
        setShowMessage(state);
        setMessage(text);
        setMessageTheme(theme);
    }


    return (
        <>
            <Background page='auth' />
            <div className='AuthPage'>
                <ErrorMessage
                    showMessage={showMessage}
                    message={message}
                    messageTheme={messageTheme}
                />

                {
                    currForm === 'login' ?
                        <LoginForm onFormSwitch={toggleForm} messageFunc={messageFunc} /> :
                        <SignupForm onFormSwitch={toggleForm} messageFunc={messageFunc} />
                }

            </div>

        </>

    )
}

export default AuthPage