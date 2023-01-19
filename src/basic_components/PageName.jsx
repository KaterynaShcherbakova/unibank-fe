import React from 'react'
import { Background } from '../basic_components/Background';
import '../basic_components/Background.css';
import { Header } from '../complex_components/Header/Header';
import '../complex_components/Header/Header.css';
import { IoArrowBackCircleSharp } from 'react-icons/io5'

export const PageName = (props) => {
    function goToMain() {
        window.location.assign('/');
    }
    return (


        <div className="page_fullname">
            <IoArrowBackCircleSharp className='pagename_icons' color='#171C27' size={28} onClick={goToMain} />
            <div className='page_name'>{props.page_name}</div>
        </div>

    )
}
