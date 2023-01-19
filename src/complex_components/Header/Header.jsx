import React from 'react'
import { Logo } from '../../basic_components/Logo'
import { VscAccount } from 'react-icons/vsc'
export const Header = (props) => {

    function goToMain() {
        window.location.assign('/');
    }
    return (
        <div className='Header'>
            <div className='header_begin'>
                <Logo className='header_logo' big={true} height={40} />
                <h4 className='header_company'
                    onClick={goToMain}>UNIBANK</h4>
            </div>
            <div className='header_end'>
                <div className='header_username'>{props.user}</div>
                <VscAccount className='header_icon' size={28} />
            </div>
        </div>


    )
}
