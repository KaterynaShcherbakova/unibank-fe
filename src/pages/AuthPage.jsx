import { useState, React } from 'react'
import { LoginForm } from '../complex_components/validation/LoginForm';
import { SignupForm } from '../complex_components/validation/SignupForm';
import '../complex_components/validation/AuthForm.css'
import { Background } from '../basic_components/background/Background';



function AuthPage(props) {
   
    const [currForm, setCurrForm] = useState('signup');
    const toggleForm = (formName) => {
        setCurrForm(formName);
    }

   

    return (
        <>
            <Background page='auth' />
            <div className='AuthPage'>
              

                {
                    currForm === 'login' ?
                        <LoginForm onFormSwitch={toggleForm} messageFunc={props.messageFunc} /> :
                        <SignupForm onFormSwitch={toggleForm} messageFunc={props.messageFunc} />
                }

            </div>

        </>

    )
}

export default AuthPage