import { useState, React } from 'react'
import { LoginForm } from '../complex_components/Validation/LoginForm';
import { SignupForm } from '../complex_components/Validation/SignupForm';
import '../complex_components/Validation/AuthForm.css'
import { ErrorMessage } from '../basic_components/ErrorMessage';
import { Background } from '../basic_components/Background';



function AuthPage() {
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const [currForm, setCurrForm] = useState('signup');
    const toggleForm = (formName) => {
        setCurrForm(formName);
    }

    const messageFunc = (state, text) => {
        setShowMessage(state);
        setMessage(text);
    }


    return (
        <>
            <Background page='auth' />
            <div className='AuthPage'>
                <ErrorMessage
                    showMessage={showMessage}
                    message={message}
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