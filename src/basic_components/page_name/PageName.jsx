import React from 'react'
import './PageName.css';
import { IoArrowBackCircleSharp } from 'react-icons/io5'

export const PageName = (props) => {
    function goToMain() {
        window.location.assign('/');
    }
    return (


        <div className="page_fullname">
            <IoArrowBackCircleSharp className='pagename_icons' color={`${props.color}`} size={26} onClick={goToMain} />
            <div className='page_name'
            style={{'color':`${props.color}`}}>{props.page_name}</div>
        </div>

    )
}
