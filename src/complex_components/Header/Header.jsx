import React from 'react'
import './Header.css'
import { Logo } from '../../img/Logo'
import { VscAccount } from 'react-icons/vsc'
export const Header = (props) => {

    function goTo(str) {
        window.location.assign('/' + str);
    }
    return (
        <div className='Header'>
            <div className='header_begin'>
                <Logo className='header_logo' big={true} height={40} />
                <h4 className='header_company'
                    onClick={() => goTo('')}>UNIBANK</h4>
            </div>
            <div className='header_end'>
                <div className='header_username'>{props.user}</div>
                <VscAccount className='header_icon' onClick={() => goTo('settings')} size={28} />
            </div>
        </div>


    )
}
